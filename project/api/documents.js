import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.https://hzzbreaycrkdscxflbkk.supabase.co;
const supabaseAnonKey = process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6emJyZWF5Y3JrZHNjeGZsYmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwODM1MTcsImV4cCI6MjA0MzY1OTUxN30.bjnsZoOfRa3dZMcy7DRN0KZ8H99AuJ-GHSppqSiZwPg;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('documents')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
