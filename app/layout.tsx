import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const fontSans = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InControl",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(fontSans.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
