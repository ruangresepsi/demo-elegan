/* =====================================================================
   RUANG RESEPSI: DAFTAR TEMA (warna + font). Dipilih lewat CONFIG.theme di config.js.
   Warna:  ivory = latar halaman | cream = latar seksi selang-seling | champ = garis halus
           beige = garis form | gold = AKSEN (judul miring, ornamen, tombol)
           char = WARNA TEKS UTAMA | mute = WARNA TEKS SEKUNDER | deep = latar gelap (hero, penutup, notifikasi)
   Font:   fh = font judul | fb = font isi | hs = skala ukuran judul (font lebar dikecilkan) | g = daftar font Google
   ===================================================================== */
const THEMES = {
  champagne: { name: "Champagne Gold",
    c: { ivory:"#faf6ef", cream:"#f3ece0", champ:"#e6d7bd", beige:"#c9b79a", gold:"#b08d57", char:"#2b2926", mute:"#6f6a62", deep:"#2b2926" },
    fh: "'Cormorant Garamond',Georgia,serif", fb: "'Jost',system-ui,sans-serif", hs: 1,
    g: ["Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400", "Jost:wght@300;400;500"] },
  blush: { name: "Blush Rose",
    c: { ivory:"#fdf7f6", cream:"#f8ebe9", champ:"#f0d6d3", beige:"#dbb0ac", gold:"#b76e79", char:"#3b2a2d", mute:"#7d6a6c", deep:"#3b2a2d" },
    fh: "'Playfair Display',Georgia,serif", fb: "'Lato',system-ui,sans-serif", hs: .88,
    g: ["Playfair+Display:ital,wght@0,400;0,500;1,400", "Lato:wght@300;400"] },
  sage: { name: "Sage Garden",
    c: { ivory:"#f6f8f3", cream:"#e9eee3", champ:"#d3dcc7", beige:"#aebba0", gold:"#75896a", char:"#26302a", mute:"#667068", deep:"#26302a" },
    fh: "'EB Garamond',Georgia,serif", fb: "'Raleway',system-ui,sans-serif", hs: 1.02,
    g: ["EB+Garamond:ital,wght@0,400;0,500;1,400", "Raleway:wght@300;400;500"] },
  dustyblue: { name: "Dusty Blue",
    c: { ivory:"#f6f8fa", cream:"#e8eef3", champ:"#d0dce6", beige:"#a9bccb", gold:"#5f7d99", char:"#243240", mute:"#5f6e7b", deep:"#243240" },
    fh: "'Spectral',Georgia,serif", fb: "'Work Sans',system-ui,sans-serif", hs: .95,
    g: ["Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400", "Work+Sans:wght@300;400;500"] },
  terracotta: { name: "Terracotta Boho",
    c: { ivory:"#fbf5ee", cream:"#f3e4d5", champ:"#e6cbb4", beige:"#c9a387", gold:"#b5603c", char:"#3a261c", mute:"#7b665a", deep:"#3d261c" },
    fh: "'Fraunces',Georgia,serif", fb: "'DM Sans',system-ui,sans-serif", hs: .92,
    g: ["Fraunces:ital,wght@0,300;0,400;0,500;1,300;1,400", "DM+Sans:wght@300;400;500"] },
  burgundy: { name: "Burgundy Velvet",
    c: { ivory:"#fbf5f4", cream:"#f2e4e2", champ:"#e3c7c4", beige:"#c49a98", gold:"#8e2f45", char:"#2e1a1e", mute:"#75605f", deep:"#4a1520" },
    fh: "'Bodoni Moda',Georgia,serif", fb: "'Montserrat',system-ui,sans-serif", hs: .9,
    g: ["Bodoni+Moda:ital,wght@0,400;0,500;1,400", "Montserrat:wght@300;400;500"] },
  emerald: { name: "Emerald Royale",
    c: { ivory:"#f4f8f5", cream:"#e3eee7", champ:"#c5dccd", beige:"#94b9a3", gold:"#1f7a5a", char:"#10291f", mute:"#5a6d63", deep:"#0f3a2b" },
    fh: "'Libre Baskerville',Georgia,serif", fb: "'Poppins',system-ui,sans-serif", hs: .8,
    g: ["Libre+Baskerville:ital,wght@0,400;1,400", "Poppins:wght@300;400;500"] },
  lavender: { name: "Lavender Dream",
    c: { ivory:"#f9f7fc", cream:"#eeeaf5", champ:"#ddd5ea", beige:"#b9aed0", gold:"#8470ae", char:"#2d2838", mute:"#6c6679", deep:"#2d2838" },
    fh: "'Cormorant Garamond',Georgia,serif", fb: "'Nunito Sans',system-ui,sans-serif", hs: 1,
    g: ["Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400", "Nunito+Sans:wght@300;400;500"] },
  navy: { name: "Navy & Gold",
    c: { ivory:"#f5f7fa", cream:"#e6ebf2", champ:"#cbd5e3", beige:"#9fb0c7", gold:"#a38551", char:"#14213d", mute:"#5b6577", deep:"#14213d" },
    fh: "'Crimson Pro',Georgia,serif", fb: "'Inter',system-ui,sans-serif", hs: 1.05,
    g: ["Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400", "Inter:wght@300;400;500"] },
  midnight: { name: "Midnight Luxe (gelap)",
    c: { ivory:"#121214", cream:"#1b1b1f", champ:"#34322e", beige:"#5a5448", gold:"#c9a96a", char:"#ece6da", mute:"#9a958b", deep:"#0a0a0b" },
    fh: "'Cormorant Garamond',Georgia,serif", fb: "'Montserrat',system-ui,sans-serif", hs: 1,
    g: ["Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400", "Montserrat:wght@300;400;500"] }
};
