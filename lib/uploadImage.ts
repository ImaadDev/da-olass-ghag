import { supabase } from "@/lib/supabaseClient";

export async function uploadImage(file: File) {
  try {
    // Generate a unique name for the image
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `news/${fileName}`;

    // Upload to Supabase Storage (bucket: news-images)
    const { error } = await supabase.storage
      .from("news")
      .upload(filePath, file);

    if (error) throw error;

    // Get public URL of the uploaded file
    const { data } = supabase.storage
      .from("news")
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}
