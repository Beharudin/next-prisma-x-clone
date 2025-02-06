import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahar Dev X Clone",
  description: "Next.js social media application project",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
