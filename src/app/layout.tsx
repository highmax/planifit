import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Planifit | Crea programas de entrenamiento profesionales",
  description:
    "La herramienta que los entrenadores necesitan para diseñar, organizar y entregar rutinas personalizadas a sus clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
