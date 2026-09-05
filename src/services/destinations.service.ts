// src/services/destinations.service.ts
import { createClient } from '@/lib/supabase/client'
import type { Destination } from '@/types/database'

export async function getDestinations(): Promise<Destination[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('statut', 'actif')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function getAllDestinations(): Promise<Destination[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function getDestinationById(id: string): Promise<Destination | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('id', id)
    .single()
  if (error) return null
  return data
}

export async function createDestination(
  payload: Omit<Destination, 'id' | 'created_at' | 'updated_at'>
): Promise<Destination> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('destinations')
    .insert(payload)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateDestination(
  id: string,
  payload: Partial<Omit<Destination, 'id' | 'created_at' | 'updated_at'>>
): Promise<Destination> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('destinations')
    .update(payload)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteDestination(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase
    .from('destinations')
    .delete()
    .eq('id', id)
  if (error) throw error
}
