# 🎉 Assembly Cihuy

Website kenangan Assembly — dibuat dengan React + Vite.

## 📁 Struktur Folder Penting

```
assembly-cihuy/
├── public/
│   └── music.mp3              # Musik background
└── src/
    ├── assets/
    │   ├── gallery/           # Foto-foto gallery (1.jpg - 16.jpg)
    │   ├── profile/           # Foto member (1.jpg - 19.jpg, ikbal.jpg, rose.jpg)
    │   └── profile.jpg        # Foto hero di halaman Home & Navbar
    ├── data/
    │   ├── Gallery.js         # Data daftar foto gallery
    │   └── Profiles.js        # Data nama & foto member
    └── components/
        ├── Hero.jsx           # Teks & elemen halaman Home
        ├── Navbar.jsx         # Navbar (nama & logo)
        └── Footer.jsx         # Footer (kreator & copyright)
    └── pages/
        └── Member.jsx         # Teks halaman Member (judul, paragraf, kartu Kak Ikbal/Rose)
```

---

## ✏️ Panduan Edit Konten

### 1. Ganti Foto Gallery

Folder: `src/assets/gallery/`

- Terdapat **16 foto** bernama `1.jpg` sampai `16.jpg`
- Cukup **replace file lama** dengan foto baru, pastikan nama file **sama persis**
- Contoh: simpan foto baru dengan nama `1.jpg` untuk mengganti foto pertama

---

### 2. Tambah / Hapus Foto Gallery

File: `src/data/Gallery.js`

**Tambah foto baru:**
1. Masukkan file foto baru ke folder `src/assets/gallery/` (misal `17.jpg`)
2. Tambahkan baris import di bagian atas file:
   ```js
   import gallery17 from "../assets/gallery/17.jpg";
   ```
3. Tambahkan objek baru di array `galleryItems`:
   ```js
   { id: 17, img: gallery17, alt: "Moment 17" },
   ```

> ⚠️ Nilai `alt` adalah teks **caption** yang muncul saat hover foto di website.

**Hapus foto:**
- Hapus baris `import`-nya
- Hapus objek terkait dari array `galleryItems`

---

### 3. Edit Data Member (Nama & Foto)

File: `src/data/Profiles.js`  
Folder foto: `src/assets/profile/`

**Ganti nama member:**
```js
export const profiles = [
  { id: 1, name: "Nama Baru", img: profile1 },
  ...
];
```
Ubah nilai `name` sesuai nama yang ingin ditampilkan di card member.

**Ganti foto member:**
- Replace file di folder `src/assets/profile/` dengan nama yang sama (misal `1.jpg`)

**Tambah member baru:**
1. Masukkan foto ke folder `src/assets/profile/` (misal `20.jpg`)
2. Tambah import di `Profiles.js`:
   ```js
   import profile20 from "../assets/profile/20.jpg";
   ```
3. Tambah objek baru di array:
   ```js
   { id: 20, name: "Nama Member", img: profile20 },
   ```

---

### 4. Edit Teks Halaman Member

File: `src/pages/Member.jsx`

| Elemen | Lokasi di file | Teks saat ini |
|---|---|---|
| Judul halaman | `<motion.h1>` | `"Thank You Kak!!!🤗💙"` |
| Paragraf ucapan | `<motion.p>` | `"Kami dari Assembly mengucapkan..."` |
| Nama kartu Kak Ikbal | `title: "Kak Eggball 🥚⚽"` | Ubah sesuai kebutuhan |
| Nama kartu Kak Rose | `title: "Kak Rose 🌹"` | Ubah sesuai kebutuhan |

**Ganti foto Kak Ikbal / Kak Rose:**
- File: `src/assets/profile/ikbal.jpg` dan `src/assets/profile/rose.jpg`
- Replace dengan foto baru, nama file harus tetap sama

---

### 5. Edit Teks Halaman Home

File: `src/components/Hero.jsx`

| Elemen | Lokasi di file | Teks saat ini |
|---|---|---|
| Judul besar | `<motion.h1>` | `"ASSEMBLY CIHUY"` |
| Sub-teks | `<p>` setelah h1 | `"Halo kak Ikbal & Kak Rose!"` |
| Link playlist Spotify | tombol `"Playlist"` | URL Spotify |

**Ganti foto hero (bulat di tengah halaman Home):**
- File: `src/assets/profile.jpg`
- Replace dengan foto baru, nama tetap `profile.jpg`

---

### 6. Edit Navbar & Footer

**Navbar** — file: `src/components/Navbar.jsx`
- Ubah teks `"Assembly"` di elemen `<h2>` untuk mengganti nama di navbar
- Logo navbar menggunakan file yang sama: `src/assets/profile.jpg`

**Footer** — file: `src/components/Footer.jsx`
- Ubah teks `"DzenMori"` dan link GitHub-nya sesuai kebutuhan

---

### 7. Ganti Musik Background

File: `public/music.mp3`

- Replace file ini dengan musik baru
- Nama file **harus tetap** `music.mp3`

---

## 🚀 Cara Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan di localhost
npm run dev

# Build untuk production
npm run build
```

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by [DzenMori](https://github.com/mdzulqornainn)
