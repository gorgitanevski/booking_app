import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tfjgnwhxxmvvrusoabuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmamdud2h4eG12dnJ1c29hYnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4ODE2MzgsImV4cCI6MjAwODQ1NzYzOH0.4zo3txXaWLbLS1CT0fyLMcZkxZzVVGjAGJVP0xhim_Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
