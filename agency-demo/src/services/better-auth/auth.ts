import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/services/db";
import { nextCookies } from "better-auth/next-js";
import { jwt, magicLink } from "better-auth/plugins";
import { schema } from "@/src/services/db/schema";
import env from "@/src/env";
import { resend } from "@/src/services/resend/resend-client";
import EmailVerification from "@/src/services/better-auth/email-verification";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    baseURL: env.NEXT_PUBLIC_APP_URL,
    trustedOrigins: [env.NEXT_PUBLIC_APP_URL],
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }) => {
                const fromEmail = env.RESEND_FROM;
                if (!fromEmail) {
                    console.error('RESEND_FROM email not configured ');
                    return;
                }
                try {
                    await resend.emails.send({
                        from: fromEmail,
                        to: email,
                        subject: 'Sign in to your account',
                        react: EmailVerification({
                            name: 'there',
                            verificationUrl: url
                        })
                    });
                } catch (error) {
                    console.error('Error sending magic link email:', error);
                    throw error;
                }
            }
        }),
        nextCookies(), 
        jwt()
    ]
});
