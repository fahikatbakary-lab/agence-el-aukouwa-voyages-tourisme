// src/types/database.ts
export type Database = {
  public: {
    Tables: {
      destinations: {
        Row: {
          id: string
          nom: string
          pays: string
          description: string | null
          image: string | null
          points_interet: string[] | null
          statut: 'actif' | 'inactif'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          pays: string
          description?: string | null
          image?: string | null
          points_interet?: string[] | null
          statut?: 'actif' | 'inactif'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          pays?: string
          description?: string | null
          image?: string | null
          points_interet?: string[] | null
          statut?: 'actif' | 'inactif'
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      offres: {
        Row: {
          id: string
          destination_id: string | null
          titre: string
          description: string | null
          prix: number | null
          date_depart: string | null
          date_retour: string | null
          image: string | null
          images: string[] | null
          services_inclus: string[] | null
          services_exclus: string[] | null
          programme: string | null
          conditions: string | null
          nombre_places: number | null
          type: 'oumra' | 'circuit' | 'sejour' | 'billetterie' | 'autre'
          statut: 'actif' | 'inactif' | 'complet'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          destination_id?: string | null
          titre: string
          description?: string | null
          prix?: number | null
          date_depart?: string | null
          date_retour?: string | null
          image?: string | null
          images?: string[] | null
          services_inclus?: string[] | null
          services_exclus?: string[] | null
          programme?: string | null
          conditions?: string | null
          nombre_places?: number | null
          type?: 'oumra' | 'circuit' | 'sejour' | 'billetterie' | 'autre'
          statut?: 'actif' | 'inactif' | 'complet'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          destination_id?: string | null
          titre?: string
          description?: string | null
          prix?: number | null
          date_depart?: string | null
          date_retour?: string | null
          image?: string | null
          images?: string[] | null
          services_inclus?: string[] | null
          services_exclus?: string[] | null
          programme?: string | null
          conditions?: string | null
          nombre_places?: number | null
          type?: 'oumra' | 'circuit' | 'sejour' | 'billetterie' | 'autre'
          statut?: 'actif' | 'inactif' | 'complet'
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'offres_destination_id_fkey'
            columns: ['destination_id']
            isOneToOne: false
            referencedRelation: 'destinations'
            referencedColumns: ['id']
          },
        ]
      }
      reservations: {
        Row: {
          id: string
          offre_id: string | null
          nom_client: string
          telephone: string
          email: string
          nombre_voyageurs: number
          date_souhaitee: string | null
          message: string | null
          destination_souhaitee: string | null
          statut: 'nouvelle' | 'en_cours' | 'confirmee' | 'annulee' | 'traitee'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          offre_id?: string | null
          nom_client: string
          telephone: string
          email: string
          nombre_voyageurs?: number
          date_souhaitee?: string | null
          message?: string | null
          destination_souhaitee?: string | null
          statut?: 'nouvelle' | 'en_cours' | 'confirmee' | 'annulee' | 'traitee'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          offre_id?: string | null
          nom_client?: string
          telephone?: string
          email?: string
          nombre_voyageurs?: number
          date_souhaitee?: string | null
          message?: string | null
          destination_souhaitee?: string | null
          statut?: 'nouvelle' | 'en_cours' | 'confirmee' | 'annulee' | 'traitee'
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'reservations_offre_id_fkey'
            columns: ['offre_id']
            isOneToOne: false
            referencedRelation: 'offres'
            referencedColumns: ['id']
          },
        ]
      }
      contacts: {
        Row: {
          id: string
          nom: string
          email: string
          telephone: string | null
          message: string
          statut: 'nouveau' | 'lu' | 'repondu'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          email: string
          telephone?: string | null
          message: string
          statut?: 'nouveau' | 'lu' | 'repondu'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          email?: string
          telephone?: string | null
          message?: string
          statut?: 'nouveau' | 'lu' | 'repondu'
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}

// Raccourcis
export type Destination = Database['public']['Tables']['destinations']['Row']
export type Offre = Database['public']['Tables']['offres']['Row']
export type Reservation = Database['public']['Tables']['reservations']['Row']
export type Contact = Database['public']['Tables']['contacts']['Row']
