import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.API_KEY || "";
console.log(supabaseUrl)
export const supabase = createClient(supabaseUrl, supabaseKey);
