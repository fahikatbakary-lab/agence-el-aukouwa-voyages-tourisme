// src/services/contacts.service.ts
import { createClient } from '@/lib/supabase/client'
import type { Contact } from '@/types/database'

export async function createContact(
  payload: Omit<Contact, 'id' | 'created_at' | 'updated_at' | 'statut'>
): Promise<Contact> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('contacts')
    .insert({ ...payload, statut: 'nouveau' })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getAllContacts(): Promise<Contact[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function updateContactStatut(
  id: string,
  statut: Contact['statut']
): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase
    .from('contacts')
    .update({ statut })
    .eq('id', id)
  if (error) throw error
}
