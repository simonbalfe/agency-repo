"use client"

import { Settings, User as UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@/src/hooks/use-user'
import { Avatar, AvatarImage, AvatarFallback } from '@/src/components/ui/avatar'

export const Navbar = () => {
  const { user } = useUser()

  return (
    <nav className="flex items-center justify-between bg-background border-b border-border px-6 h-14 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-semibold">Demo App</Link>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <Link href="/settings" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Avatar className="h-8 w-8 relative">
            <AvatarImage src={user.image || undefined} alt={user.name || 'User'} />
            <AvatarFallback>
              <UserIcon className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </nav>
  )
}
