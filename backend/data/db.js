import postgres from "postgres";
require('dotenv').config()
const connectURL = process.env.SUPABASE_URL;
const connectKEY = process.env.SUPABASE_KEY;