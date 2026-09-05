// src/services/storage.service.ts
import { createClient } from '@/lib/supabase/client'

const BUCKET = 'images'

export async function uploadImage(
  file: File,
  folder: 'offres' | 'destinations' | 'general' = 'general'
): Promise<string> {
  const supabase = createClient()
  const ext = file.name.split('.').pop()
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, file, { upsert: true })

  if (error) throw error

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(fileName)

  return data.publicUrl
}

export async function deleteImage(url: string): Promise<void> {
  const supabase = createClient()
  // Extraire le chemin depuis l'URL publique
  const path = url.split(`/storage/v1/object/public/${BUCKET}/`)[1]
  if (!path) return

  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([path])

  if (error) throw error
}
