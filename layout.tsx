// app/layout.tsx
import { Inter } from 'next/font/google'
import "../styles/global.css";

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peersvel - Connect, Learn, Succeed',
  description: 'Experience personalized peer tutoring that adapts to your learning style.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#F6F5F4]`}>
        {/* The navbar and footer will be hidden by the dashboard layout */}
       
        {children}
       
      </body>
    </html>
  )
}