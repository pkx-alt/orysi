// supabaseClient.js

// Importamos la librería de Supabase desde la CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// !!! CRÍTICO: REEMPLAZA ESTAS CLAVES CON LAS REALES DEL COMPAÑERO 5 !!!
const SUPABASE_URL = 'https://giqxulwkjkokyomylkne.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcXh1bHdramtva3lvbXlsa25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MjM3NjIsImV4cCI6MjA3OTQ5OTc2Mn0.r5xZjgI83qmhKgCjeGUH6XZrGWJF438wbZ5nf-_uXu4'; 

// Inicializa el cliente y lo exporta para ser usado en app.js
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);