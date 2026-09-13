import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Make the Next Insurance Launch Better Than the Last",
  description:
    "An outside-in product operating thesis for Iute, prepared for an Insurance Product Lead discussion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
