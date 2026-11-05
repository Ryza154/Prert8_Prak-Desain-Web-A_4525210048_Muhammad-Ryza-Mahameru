# TechBloom 2026 – Event Registration Form

Aplikasi **Form Registrasi Event TechBloom 2026** merupakan halaman pendaftaran event seminar teknologi yang dibuat menggunakan HTML, CSS, dan JavaScript.

Project ini dibuat sebagai tugas individu untuk menerapkan berbagai komponen form serta validasi input pada sisi Front-End.

# Fitur Utama

- **Nama Lengkap:** Input nama peserta (3–50 karakter).
- **Email:** Input alamat email peserta.
- **Nomor Telepon:** Input nomor telepon peserta (10–13 digit angka).
- **Radio Button:** Memilih jenis peserta (Mahasiswa, Umum, atau Pelajar).
- **Checkbox:** Memilih topik teknologi yang diminati (Web Development, UI/UX Design, Artificial Intelligence, Cyber Security).
- **Select Option:** Memilih program studi / bidang (Teknik Informatika, Sistem Informasi, Manajemen, atau Lainnya).
- **Textarea:** Menuliskan alasan mengikuti event (20–300 karakter).
- **File Upload:** Mengunggah kartu identitas peserta dalam format PDF.
- **Checkbox Persetujuan:** Pernyataan bahwa data yang diisi sudah benar.
- **Form Validation:** Memvalidasi input sebelum pendaftaran dinyatakan berhasil.
- **Responsive Design:** Tampilan menyesuaikan ukuran layar desktop dan mobile.

# Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Membuat struktur form |
| CSS3 | Mengatur tampilan dan desain responsif |
| JavaScript | Membuat validasi tambahan (`script.js`) |

## 📁 Struktur Project

```text
Prert8_Prak Desain Web A_4525210048_Muhammad Ryza Mahameru/
│
├── SS hasil run/
│   ├── hasil 1.png
│   └── hasil 2.png
│
└── form_registrasi_event/
    ├── index.html
    ├── style.css
    └── README.md
```

Kode HTML berada pada file `index.html` dan kode CSS pada file `style.css`. File `index.html` juga memanggil `script.js` untuk validasi JavaScript.

# Aturan Validasi

Berikut aturan validasi yang diterapkan pada form:

1. Nama lengkap wajib diisi minimal 3 karakter dan maksimal 50 karakter.
2. Email wajib menggunakan format email yang valid.
3. Nomor telepon wajib diisi dengan 10–13 digit angka.
4. Jenis peserta wajib dipilih.
5. Minimal satu topik minat harus dipilih.
6. Program studi / bidang wajib dipilih.
7. Alasan mengikuti event wajib diisi minimal 20 karakter dan maksimal 300 karakter.
8. File kartu identitas wajib diunggah dengan format PDF.
9. Checkbox persetujuan wajib dicentang.

# Cara Menjalankan Project

1. Download atau clone repository ini.
2. Buka folder `form_registrasi_event` menggunakan Visual Studio Code.
3. Buka file `index.html` menggunakan browser (atau **Live Server**).
4. Isi seluruh data pada form registrasi.
5. Klik tombol **Kirim Pendaftaran**.
6. Perhatikan pesan validasi yang muncul apabila terdapat input yang tidak sesuai.

# Pengujian Form

Pengujian dilakukan dengan mencoba beberapa skenario input yang tidak valid, seperti:

| No | Skenario Pengujian | Hasil yang Diharapkan |
|---|---|---|
| 1 | Nama diisi kurang dari 3 karakter | Muncul pesan nama minimal 3 karakter |
| 2 | Email menggunakan format salah | Muncul pesan format email tidak valid |
| 3 | Nomor telepon berisi huruf atau kurang dari 10 digit | Muncul pesan format tidak sesuai |
| 4 | Jenis peserta tidak dipilih | Muncul pesan wajib memilih jenis peserta |
| 5 | Tidak memilih topik minat | Muncul pesan minimal satu topik harus dipilih |
| 6 | Program studi tidak dipilih | Muncul pesan wajib memilih bidang |
| 7 | Alasan kurang dari 20 karakter | Muncul pesan minimal 20 karakter |
| 8 | File yang diunggah bukan PDF | Muncul pesan format file harus PDF |
| 9 | Checkbox persetujuan tidak dicentang | Form tidak dapat dikirim |

# Validasi Client-Side

Validasi dilakukan di browser (Client-Side Validation) menggunakan atribut HTML5 seperti `required`, `minlength`, `maxlength`, `pattern`, `type="email"`, dan `accept`, serta pemeriksaan tambahan menggunakan JavaScript.

Validasi ini meliputi pemeriksaan:
- Input kosong.
- Format email.
- Format nomor telepon.
- Minimal dan maksimal panjang karakter.
- Pilihan radio dan checkbox.
- Format file yang diunggah (PDF).

**Catatan:** Project ini hanya menggunakan Front-End. Data pendaftaran belum dikirim atau disimpan ke database maupun server.

# Tampilan Aplikasi

Aplikasi dirancang dengan tampilan modern dan bersih menggunakan latar gradasi biru muda–lavender, kartu form berwarna putih, serta tombol dan aksen berwarna biru keunguan. Desain dibuat responsif sehingga dapat digunakan melalui perangkat desktop maupun mobile.

# Output

**Bagian atas form**

![Hasil Output 1](hasil 1.png)

**Bagian bawah form**

![Hasil Output 2](hasil 2.png)

## Informasi Project

- **Nama Project:** TechBloom 2026
- **Jenis Project:** Event Registration Form
- **Kategori:** Front-End Development
- **Bahasa:** HTML, CSS, JavaScript
- **Tahun:** 2026

---

Made with ♥ using HTML, CSS, and JavaScript.