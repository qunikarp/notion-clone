import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hikki",
  description: "Structured workspace for your notes and tasks.",
  icons: {
    icon: [
      {
        media: "(prefer-color-scheme: light)",
        href: "/public/logo.svg",
        url: "/public/logo.svg",
      },
      {
        media: "(prefer-color-scheme: dark)",
        href: "/public/logo-dark.svg",
        url: "/public/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
