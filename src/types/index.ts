export type PageId = 
  | 'accueil'
  | 'oumra'
  | 'voyages'
  | 'destinations'
  | 'services'
  | 'a-propos'
  | 'galerie'
  | 'temoignages'
  | 'faq'
  | 'devis'
  | 'reservation'
  | 'contact'
  | 'connexion'
  | 'admin'
  | 'mentions-legales'
  | 'confidentialite'
  | 'cgv'
  | '404';

export type FormulaType = 'Essentielle' | 'Confort' | 'Premium' | 'Ramadan' | 'Sur Mesure';

export interface OumraOffer {
  id: string;
  title: string;
  slug: string;
  formula: FormulaType;
  description: string;
  price: number | null; // NULL means 'Sur devis'
  currency: string;
  duration: string; // e.g. "15 Jours / 14 Nuits"
  hotelMakkah: string;
  hotelMakkahDistance: string;
  hotelMadinah: string;
  hotelMadinahDistance: string;
  flightType: string; // e.g. "Vol direct ou 1 escale"
  features: string[];
  included: string[];
  notIncluded: string[];
  imageUrl: string;
  status: 'published' | 'draft' | 'archived';
  isPopular?: boolean;
  departureDates: string[];
  created_at: string;
  updated_at?: string;
}

export interface Destination {
  id: string;
  country: string;
  city: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  startingPrice: number | null;
  currency: string;
  duration: string;
  highlights: string[];
  category: 'Spiritual' | 'Culture' | 'Seaside' | 'Discovery';
  status: 'published' | 'draft';
  created_at: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  imageUrl: string;
}

export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Reservation {
  id: string;
  referenceNumber: string;
  fullName: string;
  phone: string;
  email: string;
  tripType: 'Oumra' | 'Voyage International' | 'Combiné';
  offerId?: string;
  offerTitle: string;
  travelersCount: number;
  desiredDate: string;
  cityOfDeparture: string;
  message?: string;
  status: ReservationStatus;
  notesAdmin?: string;
  created_at: string;
}

export interface QuoteRequest {
  id: string;
  referenceNumber: string;
  fullName: string;
  phone: string;
  email: string;
  country: string;
  tripType: 'Oumra' | 'Voyage International' | 'Groupe / Famille';
  destination: string;
  travelersCount: number;
  desiredDate: string;
  formula: string;
  budgetEstimated?: string;
  message: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
  created_at: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  cityCountry: string;
  formula: string;
  year: string;
  rating: number; // 1 to 5
  comment: string;
  verified: boolean;
  avatarUrl?: string;
  status: 'published' | 'pending' | 'rejected';
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Oumra' | 'La Mecque' | 'Médine' | 'Voyages' | 'Hôtels' | 'Transport';
  imageUrl: string;
  location: string;
  description?: string;
  created_at: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Oumra' | 'Documents & Visas' | 'Réservation & Devis' | 'Voyages & Séjours';
  order: number;
  status: 'published' | 'draft';
  created_at: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
}

export interface AdminUser {
  email: string;
  role: 'admin' | 'editor';
  token: string;
}
