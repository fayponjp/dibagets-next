import { createClient } from '@supabase/supabase-js';

const sp_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const sp_key = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(sp_url, sp_key);
