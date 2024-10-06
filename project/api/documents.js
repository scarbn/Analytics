import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // This pulls from your environment variable
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // This pulls from your environment variable
const supabase = createClient(supabaseUrl, supabaseAnonKey); // Creates a Supabase client instance

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('documents') // Access the 'documents' table
    .select('*'); // Fetch all columns from the table

  if (error) {
    return res.status(500).json({ error: error.message }); // Handle any errors
  }

  res.status(200).json(data); // Return the fetched data as a JSON response
}
