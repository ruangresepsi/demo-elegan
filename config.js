/* =====================================================================
   RUANG RESEPSI — MASTER TEMPLATE UNDANGAN DIGITAL
   KONFIGURASI PELANGGAN: ini satu-satunya file yang perlu diedit.
   Ganti semua teks dalam [KURUNG SIKU] dengan data pelanggan.
   Desain ada di css/style.css dan js/script.js (jangan diubah).
   Foto kosong ("") = placeholder otomatis. Path foto relatif ke index.html.
   ===================================================================== */
const CONFIG = {
  brand: "Ruang Resepsi",              /* tampil kecil di penutup; kosongkan ("") untuk menyembunyikan */

  /* ---------- TEMA WARNA & FONT ---------- */
  /* Pilih satu (tiap tema sudah termasuk pasangan font-nya; detail di themes.js):
     "champagne"  Champagne Gold      "blush"     Blush Rose
     "sage"       Sage Garden         "dustyblue" Dusty Blue
     "terracotta" Terracotta Boho     "burgundy"  Burgundy Velvet
     "emerald"    Emerald Royale      "lavender"  Lavender Dream
     "navy"       Navy & Gold         "midnight"  Midnight Luxe (gelap) */
  theme: "champagne",
  demo: true,   /* true HANYA untuk folder demo/katalog; klien asli biarkan false */
  /* OPSIONAL: timpa warna tertentu saja sesuai permintaan klien, sisanya tetap dari tema. Contoh:
     colors: { char: "#1b2a49", mute: "#5c6b86", gold: "#c0a060" }
     char = teks utama | mute = teks sekunder | gold = aksen | ivory = latar | cream = latar seksi | deep = latar gelap */
  colors: {},

  /* ---------- MEMPELAI ---------- */
  groom: { short: "Andi",  full: "Andi Pratama Wijaya, S.T.",   child: "Putra pertama dari", parents: "Bapak Hendra Wijaya & Ibu Ratna Sari", photo: "assets/photos/groom.jpg" },
  bride: { short: "Nina",  full: "Nina Safira Anggraini, S.Pd.", child: "Putri kedua dari",   parents: "Bapak Bambang Hartono & Ibu Dewi Lestari", photo: "assets/photos/bride.jpg" },

  /* ---------- TANGGAL ---------- */
  /* Format: "TAHUN-BULAN-TANGGALTJAM:MENIT:00+07:00" (WIB +07:00, WITA +08:00, WIT +09:00).
     Contoh: "2027-03-20T08:00:00+07:00". Kosong = hitung mundur 00 & tanggal tampil [TANGGAL ACARA]. */
  date: "2027-03-20T08:00:00+07:00",
  hashtag: "#AndiNinaForever",

  /* ---------- FOTO UTAMA ---------- */
  coverPhoto:   "assets/photos/cover.jpg",
  heroPhoto:    "assets/photos/hero.jpg",
  closingPhoto: "assets/photos/closing.jpg",

  /* ---------- TEKS ---------- */
  heroLine: "Dua jiwa, satu perjalanan. Kami mengundang Anda untuk menjadi saksi awal kisah selamanya kami.",
  quote: { text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.", source: "QS. Ar-Rum: 21" },
  closing: "Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih atas segala cinta dan perhatian yang diberikan.",

  /* ---------- MUSIK ---------- */
  /* Letakkan file MP3 di assets/music/ lalu isi, contoh: "assets/music/lagu.mp3". Kosong = tombol musik disembunyikan. */
  music: { src: "", title: "Background Music" },

  /* ---------- ACARA (tambah/hapus blok sesuai kebutuhan) ---------- */
  /* maps: kata kunci lokasi ATAU link Google Maps lengkap (https://maps.app.goo.gl/...). Kosong = cari dari nama tempat + alamat. */
  events: [
    { name: "Akad Nikah", date: "Sabtu, 20 Maret 2027", time: "08.00 WIB - 10.00 WIB", venue: "Masjid Al-Ikhlas", address: "Jl. Melati No. 12, Kebayoran Baru, Jakarta Selatan", maps: "" },
    { name: "Resepsi",    date: "Sabtu, 20 Maret 2027", time: "11.00 WIB - 14.00 WIB", venue: "Gedung Graha Cempaka", address: "Jl. Kenanga Raya No. 25, Kebayoran Baru, Jakarta Selatan", maps: "" }
  ],

  /* ---------- LOVE STORY (tambah/hapus momen sesuai kebutuhan) ---------- */
  story: [
    { when: "2018", title: "Pertama Bertemu", text: "Kami bertemu di sebuah acara kampus. Awalnya hanya saling sapa, tapi obrolan singkat hari itu ternyata jadi awal segalanya.", photo: "assets/photos/story-1.jpg" },
    { when: "2020", title: "Mulai Dekat", text: "Dari teman diskusi, kami jadi sahabat yang saling menguatkan. Jarak dan kesibukan tidak pernah membuat kami saling menjauh.", photo: "assets/photos/story-2.jpg" },
    { when: "2025", title: "Lamaran", text: "Dengan restu keluarga, Andi memberanikan diri melamar Nina dalam acara sederhana yang penuh haru dan kebahagiaan.", photo: "assets/photos/story-3.jpg" },
    { when: "2027", title: "Hari Bahagia", text: "Setelah perjalanan panjang, kini kami siap melangkah bersama dan memulai babak baru sebagai suami istri.", photo: "assets/photos/story-4.jpg" }
  ],

  /* ---------- GALERI (susunan terbaik 6 foto; foto 1 dan 6 tampil lebar) ---------- */
  gallery: [
    "assets/photos/gallery-1.jpg", "assets/photos/gallery-2.jpg", "assets/photos/gallery-3.jpg",
    "assets/photos/gallery-4.jpg", "assets/photos/gallery-5.jpg", "assets/photos/gallery-6.jpg"
  ],

  /* ---------- HADIAH DIGITAL ---------- */
  giftText: "Kehadiran dan doa Anda adalah hadiah terindah. Namun bila berkenan memberi tanda kasih, dapat melalui:",
  banks: [
    { bank: "BCA",     no: "1234567890",    name: "Andi Pratama Wijaya" },
    { bank: "Mandiri", no: "1310012345678", name: "Nina Safira Anggraini" }
  ],
  giftAddress: "Jl. Kenanga Raya No. 27, Kebayoran Baru, Jakarta Selatan 12120",   /* kosongkan ("") jika tidak diperlukan */

  /* ---------- RSVP ---------- */
  /* Nomor WhatsApp penerima konfirmasi, format 628123456789 (tanpa + atau 0 di depan).
     Selama masih [NOMOR WHATSAPP], tombol "Kirim via WhatsApp" disembunyikan. */
  whatsapp: "628123456789",
  /* Opsional: simpan RSVP & buku tamu di database agar tampil untuk semua tamu.
     - supabase: isi url, key (publishable/anon key, BUKAN service_role), dan invitation (kode unik tiap pelanggan, contoh "andi-nina").
     - url: alternatif Google Apps Script (Google Sheets); dipakai hanya jika supabase kosong.
     Keduanya kosong = disimpan di browser tamu saja. */
  backend: {
    url: "",
    supabase: {
      url: "https://cuqozpuulngkgjngwogo.supabase.co",
      key: "sb_publishable_2RMTYBUzF8zwOyB_E-VuzQ_c_oJnrMw",
      invitation: ""
    }
  }
};
