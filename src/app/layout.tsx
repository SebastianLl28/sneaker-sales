import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tienda de Zapatillas",
  description: "La mejor tienda de zapatillas en línea del Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
