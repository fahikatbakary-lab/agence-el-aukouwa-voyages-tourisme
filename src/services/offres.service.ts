// src/services/offres.service.ts
import { createClient } from '@/lib/supabase/client'
import type { Offre } from '@/types/database'

export async function getOffres(): Promise<Offre[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .select('*, destinations(nom, pays)')
    .eq('statut', 'actif')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as unknown as Offre[]) || []
}

export async function getAllOffres(): Promise<Offre[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .select('*, destinations(nom, pays)')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as unknown as Offre[]) || []
}

export async function getOffreById(id: string): Promise<Offre | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .select('*, destinations(nom, pays)')
    .eq('id', id)
    .single()
  if (error) return null
  return data as unknown as Offre
}

export async function getOumraOffres(): Promise<Offre[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .select('*, destinations(nom, pays)')
    .eq('type', 'oumra')
    .eq('statut', 'actif')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as unknown as Offre[]) || []
}

export async function createOffre(
  payload: Omit<Offre, 'id' | 'created_at' | 'updated_at'>
): Promise<Offre> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .insert(payload)
    .select()
    .single()
  if (error) throw error
  return data as unknown as Offre
}

export async function updateOffre(
  id: string,
  payload: Partial<Omit<Offre, 'id' | 'created_at' | 'updated_at'>>
): Promise<Offre> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('offres')
    .update(payload)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data as unknown as Offre
}

export async function deleteOffre(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase
    .from('offres')
    .delete()
    .eq('id', id)
  if (error) throw error
}
