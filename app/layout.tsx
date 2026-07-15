import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const h = Nunito({ subsets: ["latin"], variable: "--font-h" });
const b = Nunito({ subsets: ["latin"], variable: "--font-b" });

export const metadata: Metadata = {
  title: "Smile Dental \u2014 Klinik Gigi Keluarga | Jakarta",
  description: "Smile Dental adalah klinik gigi keluarga dengan dokter berpengalaman, alat modern, dan harga transparan. Booking appointment online, terima BPJS & asuransi.",
  openGraph: {
    title: "Smile Dental \u2014 Senyum Sehat Keluarga Indonesia",
    description: "Smile Dental adalah klinik gigi keluarga dengan dokter berpengalaman, alat modern, dan harga transparan. Booking appointment online, terima BPJS & asuransi.",
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Dentist", "name": "Smile Dental", "description": "Klinik gigi keluarga dengan dokter berpengalaman", "priceRange": "Rp150.000 - Rp5.000.000"};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${h.variable} ${b.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
