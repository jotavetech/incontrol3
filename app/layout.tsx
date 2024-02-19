import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { Analytics } from "@vercel/analytics/react";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const fontSans = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  authors: [
    { name: "João Vitor Gugel (jotavetech)", url: "https://jotave.tech" },
  ],
  category: "developer",
  creator: "jotavetech",
  title: {
    default: "inControl",
    template: "%s · inControl",
  },
  description:
    "Your easiest and simpliest way to control your finances, empowering you to manage your money with ease and transparency.",
  manifest: "/manifest.json",
  icons: {
    apple: "/favicon.ico",
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "João Vitor Gugel",
    "João Gugel",
    "jotavetech",
    "jotave.tech",
    "incontrol.com",
    "incontrol3.vercel.com",
    "incontrol3.vercel.app",
    "Front-end Developer",
    "FullStack Developer",
    "Back-end Developer",
    "Frontend",
    "Backend",
    "FullStack",
    "Developer",
    "Software",
    "Brazil",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "shadcn-ui",
    "TailwindCSS",
    "Framer Motion",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Finances",
    "Finances manager",
    "Control Finances",
    "inControl app",
    "inControl website",
    "Finances charts",
    "Free fincances control",
    "Open source",
    "Github",
  ],
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "/images/incontrol_readme.png",
        alt: "inControl website cover",
      },
    ],
    locale: "en",
    title: "inControl",
    siteName: "inControl",
    description: "Your easiest way to stay inControl of your finances.",
    type: "website",
    url: "https://incontrol3.vercel.app",
  },
  publisher: "Jotavetech",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "/images/incontrol_readme.png",
        alt: "inControl website cover",
      },
    ],
    card: "summary_large_image",
    title: "inControl",
    description: "Your easiest way to stay inControl of your finances.",
    site: "@jotavetech",
    creator: "João Vitor Gugel (jotavetech)",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(fontSans.className)}
          suppressHydrationWarning={true}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider />
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
