"use client"
import { useUser } from "@/src/hooks/use-user"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { VoiceAgent } from "@/src/components/voice-agent"

export function DemoPage() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth?callbackUrl=/demo")
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (!user) {
        return null // Redirecting
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-3xl font-bold">Available Agents</h1>
                <p className="text-muted-foreground">
                    Select an AI agent to interact with. Verified as {user.email}.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <VoiceAgent 
                    agentId="agent_0001k99xchp0faab4xrndne60sft"
                    name="Marketing Receptionist"
                    description="Handle scheduling, inquiries, and client intake with a voice-enabled receptionist."
                />
            </div>
        </div>
    )
}
