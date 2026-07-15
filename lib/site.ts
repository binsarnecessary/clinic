export const site = {
  name: "Smile Dental",
  logo: "🦷",
  whatsapp: "6281234567890", // TODO: ganti nomor asli
  waGreeting: "Halo Smile Dental! Saya ingin booking appointment.",
  address: "Jl. Senyum Sehat No. 21, Tebet, Jakarta Selatan",
  hours: "Senin–Sabtu 09.00–20.00, Minggu 09.00–14.00",
};

export const waLink = (t: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export const nav = {
  links: [
    { href: "#layanan", label: "Layanan" },
    { href: "#dokter", label: "Dokter" },
    { href: "#gallery", label: "Klinik" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#booking", label: "Booking" },
};

export const footer = {
  about:
    "Klinik gigi keluarga dengan dokter berpengalaman, alat modern, dan harga transparan. Terima BPJS & asuransi.",
  columns: [
    {
      title: "Menu",
      links: [
        { href: "#layanan", label: "Layanan" },
        { href: "#dokter", label: "Dokter Kami" },
        { href: "#harga", label: "Daftar Harga" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Hubungi",
      links: [
        { href: "https://wa.me/6281234567890", label: "WhatsApp" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Google Maps" },
      ],
    },
  ],
};

export type Field = { id: string; label: string; placeholder: string; textarea?: boolean };

export const form = {
  fields: [
    { id: "nama", label: "Nama", placeholder: "Nama Anda" },
    { id: "layanan", label: "Kebutuhan", placeholder: "cth: scaling, tambal gigi, behel" },
    { id: "jadwal", label: "Jadwal Diinginkan", placeholder: "cth: Sabtu pagi" },
    { id: "pesan", label: "Keluhan (opsional)", placeholder: "Ceritakan keluhan gigi Anda...", textarea: true },
  ] as Field[],
  cta: "Booking via WhatsApp",
  buildMessage: (v: Record<string, string>) =>
    `Halo Smile Dental! Saya ${v.nama ?? ""}, ingin booking ${v.layanan ?? ""} pada ${v.jadwal ?? ""}. ${v.pesan ?? ""}`,
};
