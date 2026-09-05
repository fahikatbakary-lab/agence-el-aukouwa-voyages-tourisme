// src/services/reservations.service.ts
import { createClient } from '@/lib/supabase/client'
import type { Reservation } from '@/types/database'

export async function createReservation(
  payload: Omit<Reservation, 'id' | 'created_at' | 'updated_at' | 'statut'>
): Promise<Reservation> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .insert({ ...payload, statut: 'nouvelle' })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getAllReservations(): Promise<Reservation[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .select('*, offres(titre)')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as unknown as Reservation[]) || []
}

export async function updateReservationStatut(
  id: string,
  statut: Reservation['statut']
): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase
    .from('reservations')
    .update({ statut })
    .eq('id', id)
  if (error) throw error
}

export async function getReservationStats(): Promise<{
  total: number
  nouvelles: number
  en_cours: number
  confirmees: number
}> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .select('statut')
  if (error) return { total: 0, nouvelles: 0, en_cours: 0, confirmees: 0 }
  return {
    total: data.length,
    nouvelles: data.filter(r => r.statut === 'nouvelle').length,
    en_cours: data.filter(r => r.statut === 'en_cours').length,
    confirmees: data.filter(r => r.statut === 'confirmee').length,
  }
}
