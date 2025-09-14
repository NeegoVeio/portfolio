import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kgmijjxtawmxsthptblk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWlqanh0YXdteHN0aHB0YmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDY3NjQsImV4cCI6MjA3MzE4Mjc2NH0.YuRWZUdNe9EG_gMSngkmkUtnrNgMZREJsiqRfgPbTbw";

export const supabase = createClient(supabaseUrl, supabaseKey);
