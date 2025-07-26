import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oauabcjycmglmqrhihdf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdWFiY2p5Y21nbG1xcmhpaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MjExMDcsImV4cCI6MjA2OTA5NzEwN30.ZBbgq0ZkweoZhhxC4P6F_WaD9BIBCYvV2QILMhDDiVI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
