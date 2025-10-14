// wake-db.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import 'dotenv/config';
dotenv.config();

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

async function keepAlive() {
  const { data, error } = await supabase.from('Recipe').select('id').limit(1);
  if (error) {
    console.error('❌ Error pinging DB:', error.message);
  } else {
    console.log('🌿 Pinged DB successfully at', new Date().toLocaleString());
  }
}

keepAlive();
