import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Was kann Codex?",
  description:
    "Interaktive Übersicht der Fähigkeiten dieses KI-gestützten Entwickler-Assistenten."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
