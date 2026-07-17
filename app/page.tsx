import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

const services = [
  { ic: "✨", t: "Scaling & Polishing", d: "Pembersihan karang gigi menyeluruh dengan ultrasonic scaler." },
  { ic: "🦷", t: "Tambal Gigi Estetik", d: "Tambalan komposit sewarna gigi, rapi dan tahan lama." },
  { ic: "😁", t: "Behel & Aligner", d: "Perataan gigi dengan behel metal, ceramic, atau clear aligner." },
  { ic: "👑", t: "Crown & Veneer", d: "Perbaikan bentuk dan warna gigi untuk senyum lebih percaya diri." },
  { ic: "🪥", t: "Perawatan Anak", d: "Dokter gigi anak yang sabar, ruangan ramah anak, bebas takut." },
  { ic: "⚕️", t: "Cabut & Bedah Minor", d: "Pencabutan gigi termasuk impaksi bungsu dengan anestesi nyaman." },
];

const doctors = [
  { ava: "drg. A", name: "drg. Amelia Kusuma, Sp.Ort", role: "Spesialis Ortodonti", exp: "12 tahun pengalaman · 800+ kasus behel" },
  { ava: "drg. B", name: "drg. Bayu Firmansyah", role: "Dokter Gigi Umum", exp: "8 tahun pengalaman · Gentle dentistry" },
  { ava: "drg. C", name: "drg. Citra Maharani, Sp.KGA", role: "Spesialis Gigi Anak", exp: "10 tahun pengalaman · Ramah anak" },
];

const gallery = [
  { emoji: "🏥", bg: "from-[#0ea5e9] to-[#0b3954]" },
  { emoji: "🪑", bg: "from-[#38bdf8] to-[#0369a1]" },
  { emoji: "🔬", bg: "from-[#0b3954] to-[#0ea5e9]" },
  { emoji: "🧸", bg: "from-[#7dd3fc] to-[#0284c7]" },
  { emoji: "📷", bg: "from-[#0284c7] to-[#0b3954]" },
  { emoji: "🌿", bg: "from-[#22c1c3] to-[#0b6e75]" },
];

const prices = [
  { name: "Konsultasi", price: "Rp100rb", note: "Gratis jika lanjut perawatan" },
  { name: "Scaling", price: "Rp350rb", note: "Termasuk polishing" },
  { name: "Tambal Estetik", price: "Rp400rb", note: "Per gigi, komposit premium" },
  { name: "Cabut Gigi", price: "Rp300rb", note: "Non-bedah, termasuk anestesi" },
  { name: "Behel Metal", price: "Rp5jt", note: "Termasuk kontrol 3 bulan pertama" },
  { name: "Veneer", price: "Rp2,5jt", note: "Per gigi, bahan e-max" },
];

const testimonials = [
  { text: "Anak saya yang biasanya nangis ke dokter gigi, di sini malah betah. Ruangannya ramah anak dan drg. Citra sabar banget.", name: "Ibu Ratih", role: "Pasien Anak" },
  { text: "Pasang behel di sini 1,5 tahun, hasilnya rapi. Kontrol rutinnya selalu tepat waktu dan harganya sesuai kesepakatan awal.", name: "Vania Alifia", role: "Pasien Ortodonti" },
  { text: "Takut cabut gigi bungsu, ternyata prosesnya cepat dan hampir tidak sakit. Recovery-nya juga dipantau via WhatsApp.", name: "Andra Maulana", role: "Pasien Bedah Minor" },
];

const faqs = [
  { q: "Apakah menerima BPJS?", a: "Ya, kami melayani BPJS untuk perawatan dasar (konsultasi, tambal, cabut, scaling medis). Perawatan estetik tidak ter-cover BPJS." },
  { q: "Apakah bisa langsung datang tanpa booking?", a: "Bisa, namun pasien dengan booking diprioritaskan. Kami sarankan booking via WhatsApp agar tidak menunggu lama." },
  { q: "Apakah alat yang digunakan steril?", a: "Semua instrumen disterilkan dengan autoclave sesuai standar Kemenkes, dan alat sekali pakai tidak pernah digunakan ulang." },
  { q: "Berapa biaya pasang behel dan bisa dicicil?", a: "Behel metal mulai Rp5jt dan bisa dicicil per kontrol bulanan. Konsultasi ortodonti pertama gratis." },
  { q: "Apakah ada layanan darurat?", a: "Untuk kasus darurat (sakit hebat, gigi patah karena kecelakaan), hubungi WhatsApp kami — kami usahakan slot di hari yang sama." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-extrabold uppercase tracking-[3px] text-accent">{children}</p>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-alt py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow>🦷 Klinik Gigi Keluarga · Tebet</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Senyum Sehat untuk <span className="text-accent">Seluruh Keluarga</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Dokter berpengalaman, alat modern, dan harga transparan. Dari
              scaling rutin sampai behel — semua dalam satu klinik yang nyaman.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#booking" className="rounded-full bg-accent px-8 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90">
                Booking Appointment
              </a>
              <a href="#harga" className="rounded-full border-2 border-line bg-card px-8 py-3.5 font-bold text-heading transition-colors hover:border-accent">
                Lihat Harga
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
              <span>✓ Terima BPJS &amp; Asuransi</span>
              <span>✓ Steril Standar Kemenkes</span>
              <span>✓ Ramah Anak</span>
            </div>
          </div>
          <div className="flex aspect-square items-center justify-center rounded-[40px] bg-gradient-to-br from-[#38bdf8] to-[#0b3954] text-9xl shadow-2xl shadow-accent/20">
            🦷
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Layanan</Eyebrow>
          <h2 className="text-3xl font-extrabold md:text-4xl">Perawatan Lengkap di Satu Tempat</h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="rounded-2xl border-[1.5px] border-line p-7 transition-colors hover:border-accent">
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-surface text-2xl">{s.ic}</div>
                <h3 className="mt-4 text-lg font-extrabold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="dokter" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Tim Dokter</Eyebrow>
          <h2 className="text-3xl font-extrabold md:text-4xl">Di Tangan yang Tepat</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {doctors.map((d) => (
              <div key={d.name} className="rounded-2xl bg-card p-8 text-center shadow-md shadow-accent/5">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0b3954] text-sm font-extrabold text-white">
                  {d.ava}
                </div>
                <h3 className="mt-4 font-extrabold">{d.name}</h3>
                <p className="text-sm font-semibold text-accent">{d.role}</p>
                <p className="mt-2 text-xs text-muted">{d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Klinik Kami</Eyebrow>
          <h2 className="text-3xl font-extrabold md:text-4xl">Nyaman Sejak Masuk Pintu</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <div key={i} className={`flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br text-5xl transition-transform hover:scale-[1.03] ${g.bg}`}>
                {g.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Daftar Harga</Eyebrow>
          <h2 className="text-3xl font-extrabold md:text-4xl">Transparan, Tanpa Biaya Kejutan</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">Estimasi biaya disampaikan sebelum tindakan. Tersedia cicilan untuk perawatan besar.</p>
          <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((p) => (
              <div key={p.name} className="flex items-center justify-between rounded-2xl bg-card p-6 shadow-sm">
                <div>
                  <h3 className="font-extrabold">{p.name}</h3>
                  <p className="mt-0.5 text-xs text-muted">{p.note}</p>
                </div>
                <span className="whitespace-nowrap text-lg font-extrabold text-accent">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Testimoni</Eyebrow>
          <h2 className="text-3xl font-extrabold md:text-4xl">Kata Pasien Kami</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-surface p-7">
                <div className="mb-3.5 tracking-[3px] text-[#f59e0b]">★★★★★</div>
                <blockquote className="text-sm">“{t.text}”</blockquote>
                <figcaption className="mt-4">
                  <strong className="block text-sm">{t.name}</strong>
                  <span className="text-xs text-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-alt py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-extrabold md:text-4xl">Sering Ditanyakan</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-heading">
                  {f.q}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3.5 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <Eyebrow>Booking</Eyebrow>
            <h2 className="text-3xl font-extrabold md:text-4xl">Jadwalkan Kunjungan Anda</h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["📍", "Alamat", site.address],
                ["⏰", "Jam Praktik", site.hours],
                ["💬", "WhatsApp", "+62 878-3037-7139"],
                ["🚨", "Darurat", "Slot same-day untuk kasus darurat"],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-xl">{ic}</div>
                  <div>
                    <strong className="block text-sm text-heading">{t}</strong>
                    <span className="text-sm text-muted">{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
