import { supabase } from "@/lib/supabaseClient";

export async function getPakistanNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "pakistan")
    .order("created_at", { ascending: false });

  console.log("Pakistan news:", data);

  if (error) {
    console.error("Error fetching pakistan news:", error.message);
    return [];
  }

  return data;
}

export async function getWorldNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "world")
    .order("created_at", { ascending: false });

  console.log("World news:", data);

  if (error) {
    console.error("Error fetching world news:", error.message);
    return [];
  }

  return data;
}

export async function getTechnologyNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "technology")
    .order("created_at", { ascending: false });

  console.log("Technology news:", data);

  if (error) {
    console.error("Error fetching technology news:", error.message);
    return [];
  }

  return data;
}

export async function getShowbizNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "showbiz")
    .order("created_at", { ascending: false });

  console.log("Showbiz news:", data);

  if (error) {
    console.error("Error fetching showbiz news:", error.message);
    return [];
  }

  return data;
}

export async function getFactCheckerNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "fact checker")
    .order("created_at", { ascending: false });

  console.log("Fact Checker news:", data);

  if (error) {
    console.error("Error fetching fact checker news:", error.message);
    return [];
  }

  return data;
}

export async function getHealthNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "health")
    .order("created_at", { ascending: false });

  console.log("Health news:", data);

  if (error) {
    console.error("Error fetching health news:", error.message);
    return [];
  }

  return data;
}

export async function getClimateNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "climate")
    .order("created_at", { ascending: false });

  console.log("Climate news:", data);

  if (error) {
    console.error("Error fetching climate news:", error.message);
    return [];
  }

  return data;
}

export async function getBusinessNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "business")
    .order("created_at", { ascending: false });

  console.log("Business news:", data);

  if (error) {
    console.error("Error fetching business news:", error.message);
    return [];
  }

  return data;
}

export async function getAllNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  console.log("All news:", data);

  if (error) {
    console.error("Error fetching all news:", error.message);
    return [];
  }

  return data;
}

export async function getSportsNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("category", "sports")
    .order("created_at", { ascending: false });

  console.log("Sports news:", data);

  if (error) {
    console.error("Error fetching sports news:", error.message);
    return [];
  }

  return data;
}

export async function getNewsBySlug(slug: string) {
  try {
    console.log("🔍 Searching for article with slug:", slug);

    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .limit(1);

    console.log("🔍 Raw Supabase response - Data:", data, "Error:", error);

    if (error) {
      console.error("❌ Database error fetching by slug:", error);
      return null;
    }

    if (!data || data.length === 0) {
      console.log("ℹ️ No published article found with slug:", slug);
      return null;
    }

    const article = data[0];
    console.log("✅ Found article:", article.title);
    return article;

  } catch (err) {
    console.error("❌ Unexpected error in getNewsBySlug:", err);
    return null;
  }
}
