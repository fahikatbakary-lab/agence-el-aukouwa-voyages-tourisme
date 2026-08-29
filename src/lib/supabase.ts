import { 
  OumraOffer, 
  Destination, 
  ServiceItem, 
  Testimonial, 
  GalleryItem, 
  FAQItem, 
  Reservation, 
  QuoteRequest, 
  ContactMessage 
} from '../types';
import { 
  INITIAL_OUMRA_OFFERS, 
  INITIAL_DESTINATIONS, 
  INITIAL_SERVICES, 
  INITIAL_TESTIMONIALS, 
  INITIAL_GALLERY, 
  INITIAL_FAQS, 
  INITIAL_RESERVATIONS, 
  INITIAL_QUOTES, 
  INITIAL_CONTACT_MESSAGES 
} from '../data/initialData';

// Local storage key constants
const STORAGE_KEYS = {
  OFFERS: 'el_aukouwa_offers',
  DESTINATIONS: 'el_aukouwa_destinations',
  SERVICES: 'el_aukouwa_services',
  TESTIMONIALS: 'el_aukouwa_testimonials',
  GALLERY: 'el_aukouwa_gallery',
  FAQS: 'el_aukouwa_faqs',
  RESERVATIONS: 'el_aukouwa_reservations',
  QUOTES: 'el_aukouwa_quotes',
  MESSAGES: 'el_aukouwa_messages',
  AUTH: 'el_aukouwa_admin_session',
  SUPABASE_CONFIG: 'el_aukouwa_supabase_config',
};

// Safe storage utilities
function getStored<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item) as T;
  } catch (e) {
    console.error(`Error reading ${key} from storage:`, e);
    return fallback;
  }
}

function setStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error writing ${key} to storage:`, e);
  }
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  isConnected: boolean;
}

export const dataStore = {
  // Config
  getSupabaseConfig(): SupabaseConfig {
    const envUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
    const envKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';
    const stored = getStored<SupabaseConfig>(STORAGE_KEYS.SUPABASE_CONFIG, {
      url: envUrl,
      anonKey: envKey,
      isConnected: Boolean(envUrl && envKey),
    });
    return stored;
  },

  saveSupabaseConfig(config: SupabaseConfig): void {
    setStored(STORAGE_KEYS.SUPABASE_CONFIG, config);
  },

  // Oumra Offers
  getOffers(): OumraOffer[] {
    return getStored<OumraOffer[]>(STORAGE_KEYS.OFFERS, INITIAL_OUMRA_OFFERS);
  },
  getOumraOffers(): OumraOffer[] {
    return this.getOffers();
  },
  saveOffer(offer: OumraOffer): void {
    const current = this.getOffers();
    const index = current.findIndex(o => o.id === offer.id);
    if (index >= 0) {
      current[index] = { ...offer, updated_at: new Date().toISOString() };
    } else {
      current.unshift(offer);
    }
    setStored(STORAGE_KEYS.OFFERS, current);
  },
  addOumraOffer(offer: Omit<OumraOffer, 'id' | 'created_at' | 'updated_at'>): OumraOffer {
    const current = this.getOffers();
    const newOffer: OumraOffer = {
      ...offer,
      id: `offer-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    current.unshift(newOffer);
    setStored(STORAGE_KEYS.OFFERS, current);
    return newOffer;
  },
  deleteOffer(id: string): void {
    const current = this.getOffers().filter(o => o.id !== id);
    setStored(STORAGE_KEYS.OFFERS, current);
  },
  deleteOumraOffer(id: string): void {
    this.deleteOffer(id);
  },

  // Destinations
  getDestinations(): Destination[] {
    return getStored<Destination[]>(STORAGE_KEYS.DESTINATIONS, INITIAL_DESTINATIONS);
  },
  saveDestination(destination: Destination): void {
    const current = this.getDestinations();
    const index = current.findIndex(d => d.id === destination.id);
    if (index >= 0) {
      current[index] = destination;
    } else {
      current.unshift(destination);
    }
    setStored(STORAGE_KEYS.DESTINATIONS, current);
  },
  deleteDestination(id: string): void {
    const current = this.getDestinations().filter(d => d.id !== id);
    setStored(STORAGE_KEYS.DESTINATIONS, current);
  },

  // Services
  getServices(): ServiceItem[] {
    return getStored<ServiceItem[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  },

  // Testimonials
  getTestimonials(): Testimonial[] {
    return getStored<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
  },
  addTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'status'>): Testimonial {
    const current = this.getTestimonials();
    const newT: Testimonial = {
      ...testimonial,
      id: `test-${Date.now()}`,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    current.unshift(newT);
    setStored(STORAGE_KEYS.TESTIMONIALS, current);
    return newT;
  },
  updateTestimonialStatus(id: string, status: Testimonial['status']): void {
    const current = this.getTestimonials();
    const target = current.find(t => t.id === id);
    if (target) {
      target.status = status;
      setStored(STORAGE_KEYS.TESTIMONIALS, current);
    }
  },
  saveTestimonial(testimonial: Testimonial): void {
    const current = this.getTestimonials();
    const index = current.findIndex(t => t.id === testimonial.id);
    if (index >= 0) {
      current[index] = testimonial;
    } else {
      current.unshift(testimonial);
    }
    setStored(STORAGE_KEYS.TESTIMONIALS, current);
  },
  deleteTestimonial(id: string): void {
    const current = this.getTestimonials().filter(t => t.id !== id);
    setStored(STORAGE_KEYS.TESTIMONIALS, current);
  },

  // Gallery
  getGallery(): GalleryItem[] {
    return getStored<GalleryItem[]>(STORAGE_KEYS.GALLERY, INITIAL_GALLERY);
  },
  saveGalleryItem(item: GalleryItem): void {
    const current = this.getGallery();
    const index = current.findIndex(g => g.id === item.id);
    if (index >= 0) {
      current[index] = item;
    } else {
      current.unshift(item);
    }
    setStored(STORAGE_KEYS.GALLERY, current);
  },
  deleteGalleryItem(id: string): void {
    const current = this.getGallery().filter(g => g.id !== id);
    setStored(STORAGE_KEYS.GALLERY, current);
  },

  // FAQs
  getFAQs(): FAQItem[] {
    return getStored<FAQItem[]>(STORAGE_KEYS.FAQS, INITIAL_FAQS);
  },
  getFaqs(): FAQItem[] {
    return this.getFAQs();
  },
  saveFAQ(faq: FAQItem): void {
    const current = this.getFAQs();
    const index = current.findIndex(f => f.id === faq.id);
    if (index >= 0) {
      current[index] = faq;
    } else {
      current.push(faq);
    }
    setStored(STORAGE_KEYS.FAQS, current);
  },
  deleteFAQ(id: string): void {
    const current = this.getFAQs().filter(f => f.id !== id);
    setStored(STORAGE_KEYS.FAQS, current);
  },

  // Reservations
  getReservations(): Reservation[] {
    return getStored<Reservation[]>(STORAGE_KEYS.RESERVATIONS, INITIAL_RESERVATIONS);
  },
  addReservation(res: Omit<Reservation, 'id' | 'referenceNumber' | 'created_at' | 'status'>): Reservation {
    const current = this.getReservations();
    const newRes: Reservation = {
      ...res,
      id: `res-${Date.now()}`,
      referenceNumber: `RES-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    current.unshift(newRes);
    setStored(STORAGE_KEYS.RESERVATIONS, current);
    return newRes;
  },
  updateReservationStatus(id: string, status: Reservation['status'], notesAdmin?: string): void {
    const current = this.getReservations();
    const target = current.find(r => r.id === id);
    if (target) {
      target.status = status;
      if (notesAdmin !== undefined) target.notesAdmin = notesAdmin;
      setStored(STORAGE_KEYS.RESERVATIONS, current);
    }
  },
  deleteReservation(id: string): void {
    const current = this.getReservations().filter(r => r.id !== id);
    setStored(STORAGE_KEYS.RESERVATIONS, current);
  },

  // Quote Requests
  getQuotes(): QuoteRequest[] {
    return getStored<QuoteRequest[]>(STORAGE_KEYS.QUOTES, INITIAL_QUOTES);
  },
  addQuote(quote: Omit<QuoteRequest, 'id' | 'referenceNumber' | 'created_at' | 'status'>): QuoteRequest {
    const current = this.getQuotes();
    const newQuote: QuoteRequest = {
      ...quote,
      id: `quote-${Date.now()}`,
      referenceNumber: `DEV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'new',
      created_at: new Date().toISOString(),
    };
    current.unshift(newQuote);
    setStored(STORAGE_KEYS.QUOTES, current);
    return newQuote;
  },
  updateQuoteStatus(id: string, status: QuoteRequest['status']): void {
    const current = this.getQuotes();
    const target = current.find(q => q.id === id);
    if (target) {
      target.status = status;
      setStored(STORAGE_KEYS.QUOTES, current);
    }
  },
  deleteQuote(id: string): void {
    const current = this.getQuotes().filter(q => q.id !== id);
    setStored(STORAGE_KEYS.QUOTES, current);
  },

  // Contact Messages
  getMessages(): ContactMessage[] {
    return getStored<ContactMessage[]>(STORAGE_KEYS.MESSAGES, INITIAL_CONTACT_MESSAGES);
  },
  addMessage(msg: Omit<ContactMessage, 'id' | 'created_at' | 'status'>): ContactMessage {
    const current = this.getMessages();
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      status: 'unread',
      created_at: new Date().toISOString(),
    };
    current.unshift(newMsg);
    setStored(STORAGE_KEYS.MESSAGES, current);
    return newMsg;
  },
  updateMessageStatus(id: string, status: ContactMessage['status']): void {
    const current = this.getMessages();
    const target = current.find(m => m.id === id);
    if (target) {
      target.status = status;
      setStored(STORAGE_KEYS.MESSAGES, current);
    }
  },
  deleteMessage(id: string): void {
    const current = this.getMessages().filter(m => m.id !== id);
    setStored(STORAGE_KEYS.MESSAGES, current);
  },

  // Reset to initial demo data
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEYS.OFFERS);
    localStorage.removeItem(STORAGE_KEYS.DESTINATIONS);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.FAQS);
    localStorage.removeItem(STORAGE_KEYS.RESERVATIONS);
    localStorage.removeItem(STORAGE_KEYS.QUOTES);
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
  },
};

// SQL Schema generator for Supabase PostgreSQL
export const SUPABASE_SQL_SCHEMA = `-- =========================================================
-- AGENCE EL AUKOUWA VOYAGES & TOURISME
-- Script d'initialisation PostgreSQL Supabase
-- Généré conformément au Cahier des Charges (Sections 29-33)
-- =========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (Admins / Staff)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Oumra Offers Table
CREATE TABLE IF NOT EXISTS public.oumra_offers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  formula TEXT NOT NULL CHECK (formula IN ('Essentielle', 'Confort', 'Premium', 'Ramadan', 'Sur Mesure')),
  description TEXT NOT NULL,
  price NUMERIC, -- NULL means 'Sur devis'
  currency TEXT DEFAULT 'FCFA',
  duration TEXT NOT NULL,
  hotel_makkah TEXT NOT NULL,
  hotel_makkah_distance TEXT,
  hotel_madinah TEXT NOT NULL,
  hotel_madinah_distance TEXT,
  flight_type TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  included JSONB DEFAULT '[]'::jsonb,
  not_included JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  is_popular BOOLEAN DEFAULT false,
  departure_dates JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Destinations Table
CREATE TABLE IF NOT EXISTS public.destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  starting_price NUMERIC, -- NULL means 'Sur devis'
  currency TEXT DEFAULT 'FCFA',
  duration TEXT NOT NULL,
  highlights JSONB DEFAULT '[]'::jsonb,
  category TEXT DEFAULT 'Discovery' CHECK (category IN ('Spiritual', 'Culture', 'Seaside', 'Discovery')),
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Reservations Table
CREATE TABLE IF NOT EXISTS public.reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_number TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  trip_type TEXT NOT NULL,
  offer_title TEXT NOT NULL,
  travelers_count INTEGER NOT NULL DEFAULT 1,
  desired_date DATE NOT NULL,
  city_of_departure TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes_admin TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Quote Requests Table
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_number TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  trip_type TEXT NOT NULL,
  destination TEXT NOT NULL,
  travelers_count INTEGER NOT NULL DEFAULT 1,
  desired_date DATE NOT NULL,
  formula TEXT,
  budget_estimated TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_name TEXT NOT NULL,
  city_country TEXT NOT NULL,
  formula TEXT NOT NULL,
  year TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  verified BOOLEAN DEFAULT true,
  avatar_url TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'pending')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Gallery Table
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Oumra', 'La Mecque', 'Médine', 'Voyages', 'Hôtels', 'Transport')),
  image_url TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. FAQs Table
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  "order" INTEGER DEFAULT 0,
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.oumra_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public can READ published content
CREATE POLICY "Public Read Offers" ON public.oumra_offers FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Destinations" ON public.destinations FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Testimonials" ON public.testimonials FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Gallery" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Public Read FAQs" ON public.faqs FOR SELECT USING (status = 'published');

-- Public can INSERT quotes, reservations, and messages
CREATE POLICY "Public Insert Reservations" ON public.reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Quote Requests" ON public.quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Authenticated Admin can perform full CRUD
CREATE POLICY "Admin Full Access Offers" ON public.oumra_offers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Destinations" ON public.destinations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Reservations" ON public.reservations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Quotes" ON public.quote_requests FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Messages" ON public.contact_messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Gallery" ON public.gallery FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access FAQs" ON public.faqs FOR ALL USING (auth.role() = 'authenticated');
`;

export const SUPABASE_SCHEMA_SQL = SUPABASE_SQL_SCHEMA;
