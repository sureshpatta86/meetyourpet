import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Mates | Adopt A Pet | Buy And Sell Pets Online | MeetYourPet',
  description: 'Find a Breeding Mate or a Playmate for Your Pet. Petmeetly connects you with 1000s of Dogs, Cats of all Breeds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
