import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nutrite al Max | Nutrición y rendimiento",
  description:
    "Nutrición profesional, consultas y guías digitales de Leandro Horaiki en Yerba Buena y online.",
  icons: {
    icon: "/nutrite-al-max-logo.png",
    shortcut: "/nutrite-al-max-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

