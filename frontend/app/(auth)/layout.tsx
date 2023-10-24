import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


import "../globals.css";

export const metadata = {
    title: "Nanrr",
    description: 'Find The Perfect Newborn Care Specialist For You!'
}

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ 
    children 
}: { children: React.ReactNode }) {
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}