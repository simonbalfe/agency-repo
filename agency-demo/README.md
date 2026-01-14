# Demo App

A simplified app with magic link authentication and protected demos.

## Tech Stack
- **Framework**: Next.js 15
- **Auth**: Better Auth (Magic Link)
- **Database**: Drizzle ORM + PostgreSQL

## Setup

1.  Clone the repository
2.  Install dependencies: `pnpm install`
3.  Set up environment variables in `.env`:
    ```
    DATABASE_URL=
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    RESEND_API_KEY=
    RESEND_FROM=
    ```
4.  Run database migrations: `pnpm drizzle-kit push`
5.  Start the development server: `pnpm run dev`

## Magic Links
During development, magic links are logged to the console. Check your terminal for the login URL after submitting your email.
