-- ============================================================
-- EL AUKOUWA VOYAGES & TOURISME — MIGRATIONS SUPABASE
-- Exécuter ces requêtes dans l'éditeur SQL de Supabase
-- ============================================================

-- ——— Extensions ———
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLE: destinations
-- ============================================================
CREATE TABLE IF NOT EXISTS public.destinations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nom TEXT NOT NULL,
  pays TEXT NOT NULL,
  description TEXT,
  image TEXT,
  points_interet TEXT[] DEFAULT '{}',
  statut TEXT NOT NULL DEFAULT 'actif' CHECK (statut IN ('actif', 'inactif')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================
-- TABLE: offres
-- ============================================================
CREATE TABLE IF NOT EXISTS public.offres (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE SET NULL,
  titre TEXT NOT NULL,
  description TEXT,
  prix NUMERIC(10,2),
  date_depart DATE,
  date_retour DATE,
  image TEXT,
  images TEXT[] DEFAULT '{}',
  services_inclus TEXT[] DEFAULT '{}',
  services_exclus TEXT[] DEFAULT '{}',
  programme TEXT,
  conditions TEXT,
  nombre_places INTEGER,
  type TEXT NOT NULL DEFAULT 'autre' CHECK (type IN ('oumra', 'circuit', 'sejour', 'billetterie', 'autre')),
  statut TEXT NOT NULL DEFAULT 'actif' CHECK (statut IN ('actif', 'inactif', 'complet')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================
-- TABLE: reservations
-- ============================================================
CREATE TABLE IF NOT EXISTS public.reservations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  offre_id UUID REFERENCES public.offres(id) ON DELETE SET NULL,
  nom_client TEXT NOT NULL,
  telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  nombre_voyageurs INTEGER NOT NULL DEFAULT 1,
  date_souhaitee DATE,
  message TEXT,
  destination_souhaitee TEXT,
  statut TEXT NOT NULL DEFAULT 'nouvelle' CHECK (statut IN ('nouvelle', 'en_cours', 'confirmee', 'annulee', 'traitee')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================
-- TABLE: contacts
-- ============================================================
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,
  message TEXT NOT NULL,
  statut TEXT NOT NULL DEFAULT 'nouveau' CHECK (statut IN ('nouveau', 'lu', 'repondu')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================
-- TRIGGER: updated_at automatique
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER destinations_updated_at
  BEFORE UPDATE ON public.destinations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER offres_updated_at
  BEFORE UPDATE ON public.offres
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER reservations_updated_at
  BEFORE UPDATE ON public.reservations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Activer RLS sur toutes les tables
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offres ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- ——— Destinations: lecture publique ———
CREATE POLICY "destinations_public_read"
  ON public.destinations FOR SELECT
  TO anon, authenticated
  USING (statut = 'actif');

CREATE POLICY "destinations_admin_all"
  ON public.destinations FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ——— Offres: lecture publique ———
CREATE POLICY "offres_public_read"
  ON public.offres FOR SELECT
  TO anon, authenticated
  USING (statut = 'actif');

CREATE POLICY "offres_admin_all"
  ON public.offres FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ——— Réservations: insertion publique, lecture/modif admin ———
CREATE POLICY "reservations_public_insert"
  ON public.reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "reservations_admin_read"
  ON public.reservations FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "reservations_admin_update"
  ON public.reservations FOR UPDATE
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ——— Contacts: insertion publique, lecture/modif admin ———
CREATE POLICY "contacts_public_insert"
  ON public.contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "contacts_admin_read"
  ON public.contacts FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "contacts_admin_update"
  ON public.contacts FOR UPDATE
  TO authenticated
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE: Bucket pour les images
-- ============================================================
-- Exécuter dans Supabase > Storage > Create bucket: "images"
-- Ou via API:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Politique de lecture publique pour le bucket images
-- CREATE POLICY "images_public_read"
--   ON storage.objects FOR SELECT TO anon
--   USING (bucket_id = 'images');

-- CREATE POLICY "images_admin_upload"
--   ON storage.objects FOR INSERT TO authenticated
--   WITH CHECK (bucket_id = 'images');

-- CREATE POLICY "images_admin_update"
--   ON storage.objects FOR UPDATE TO authenticated
--   USING (bucket_id = 'images');

-- CREATE POLICY "images_admin_delete"
--   ON storage.objects FOR DELETE TO authenticated
--   USING (bucket_id = 'images');

-- ============================================================
-- DONNÉES DE DÉMONSTRATION (optionnel)
-- ============================================================
INSERT INTO public.destinations (nom, pays, description, statut) VALUES
  ('La Mecque', 'Arabie Saoudite', 'Ville sainte de l''Islam et destination principale pour l''Oumra et le Hajj. La Mecque abrite la Grande Mosquée (Masjid al-Haram) et la Kaaba, vers laquelle tous les musulmans se tournent pour prier.', 'actif'),
  ('Médine', 'Arabie Saoudite', 'Deuxième ville sainte de l''Islam, Médine abrite la Mosquée du Prophète (Al-Masjid an-Nabawi). Une étape spirituelle incontournable pour les pèlerins.', 'actif'),
  ('Dubaï', 'Émirats Arabes Unis', 'Métropole moderne et cosmopolite, Dubaï offre une expérience unique mêlant modernité et tradition. Shopping, architecture futuriste et plages magnifiques.', 'actif'),
  ('Istanbul', 'Turquie', 'Pont entre l''Orient et l''Occident, Istanbul fascine par son histoire, ses mosquées somptueuses et sa gastronomie exceptionnelle.', 'actif');
