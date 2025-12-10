import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Mobile Shop",
  description: "Your trusted mobile accessories & services partner in Lahore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
