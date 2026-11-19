
const SUPABASE_URL = "https://pmpxjzllgomuwhbqhwip.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KKS4VKUka1aP6mSou6cB7Q_1y05Eoua";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
