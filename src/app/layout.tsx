import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier N°78",
  description:
    "Klarheit entsteht, wenn Zusammenhänge sichtbar werden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}