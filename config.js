// ============================================
// config.js - File konfigurasi terpisah
// ============================================

// CONFIGURATION
const CONFIG = {
    // Supabase Configuration
    SUPABASE_URL: 'https://vnsiqcafdyezzhtfgytu.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuc2lxY2FmZHllenpodGZneXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MjQ1NjQsImV4cCI6MjEwMTMwMDU2NH0.SBI82rAo6AYYQiWym1FnjU-wA3qyIR5t613nQQpEoOM',
    
    // Password for admin access
    PASSWORD: 'admin123',
    
    // Default target payment
    DEFAULT_TARGET: 500000
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
