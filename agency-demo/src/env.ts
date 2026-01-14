const env = {
    NODE_ENV: process.env.NODE_ENV!,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    DATABASE_URL: process.env.DATABASE_URL!,
    RESEND_API_KEY: process.env.RESEND_API_KEY!,
    RESEND_FROM: process.env.RESEND_FROM!,
}

export default env;