/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    API_KEY:process.env.API_KEY

  }
}

module.exports = nextConfig
