# Form Registrasi Event TechBloom 2026

## Deskripsi Project

Form Registrasi Event TechBloom 2026 adalah halaman pendaftaran seminar teknologi yang dibuat untuk memenuhi **Tugas Individu Desain Web Pertemuan 8**. Project ini dibuat menggunakan HTML, CSS, dan JavaScript.

Tujuan project ini adalah menerapkan elemen form lanjutan, yaitu radio button, checkbox, select atau dropdown, textarea, file upload, serta validasi HTML5. Tampilan form dibuat sederhana, rapi, dan responsif agar dapat digunakan melalui desktop maupun perangkat mobile.

## Fitur Form

Form registrasi ini memiliki beberapa bagian berikut:

1. **Nama lengkap** – untuk memasukkan nama peserta.
2. **Email** – untuk memasukkan alamat email peserta.
3. **Nomor telepon** – untuk memasukkan nomor telepon peserta.
4. **Radio button** – untuk memilih satu jenis peserta, yaitu Mahasiswa, Umum, atau Pelajar.
5. **Checkbox** – untuk memilih satu atau lebih topik yang diminati, yaitu Web Development, UI/UX Design, Artificial Intelligence, dan Cyber Security.
6. **Select / dropdown** – untuk memilih program studi atau bidang.
7. **Textarea** – untuk menuliskan alasan mengikuti event.
8. **File upload** – untuk mengunggah kartu identitas dalam format PDF.
9. **Checkbox persetujuan** – sebagai pernyataan bahwa data yang diisi sudah benar.

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Membuat struktur dan elemen form |
| CSS3 | Mengatur warna, tata letak, dan tampilan responsif |
| JavaScript | Menambahkan pemeriksaan input sebelum form dinyatakan berhasil |

## Struktur Folder Project

```text
form_registrasi_event/
├── index.html
├── style.css
├── script.js
├── README.md
├── test-case.md
└── ringkasan.md
```

Keterangan:
- `index.html` berisi struktur halaman dan seluruh komponen form.
- `style.css` berisi pengaturan tampilan halaman, termasuk penyesuaian untuk layar mobile.
- `script.js` berisi validasi tambahan untuk pilihan topik dan file PDF.
- `README.md` berisi penjelasan dan petunjuk project.
- `test-case.md` berisi skenario pengujian validasi.
- `ringkasan.md` berisi ringkasan pengerjaan tugas.

## Aturan Validasi

Validasi yang diterapkan pada form antara lain:

1. **Required** – memastikan kolom wajib diisi atau dipilih.
2. **Minlength** – nama harus terdiri dari minimal 3 karakter dan alasan mengikuti event minimal 20 karakter.
3. **Maxlength** – nama dibatasi maksimal 50 karakter dan alasan maksimal 300 karakter.
4. **Pattern** – nomor telepon hanya menerima 10 sampai 13 digit angka.
5. **Type email** – memastikan alamat email mengikuti format email.
6. **Accept PDF** – membatasi pilihan file pada pemilih file ke format PDF.
7. **Validasi JavaScript** – memastikan minimal satu topik diminati dipilih dan file yang diunggah berekstensi PDF.

## Cara Menjalankan Project

1. Download file project, kemudian ekstrak ZIP.
2. Buka Visual Studio Code.
3. Pilih **File > Open Folder**, lalu buka folder `form_registrasi_event`.
4. Buka file `index.html`.
5. Jalankan menggunakan ekstensi **Live Server** dengan klik kanan pada file `index.html`, lalu pilih **Open with Live Server**.
6. Jika tidak menggunakan Live Server, file `index.html` juga dapat dibuka langsung melalui browser.
7. Isi form untuk mencoba proses validasi.

## Pengujian Form

Pengujian dilakukan dengan mencoba input yang tidak sesuai dengan aturan. Contoh skenario pengujian:

| No. | Skenario Input Salah | Hasil yang Diharapkan |
|---|---|---|
| 1 | Nama hanya diisi 2 karakter | Browser menolak karena kurang dari 3 karakter |
| 2 | Email diisi dengan format yang salah | Browser menolak format email |
| 3 | Nomor telepon berisi huruf | Browser menolak karena tidak sesuai pola angka |
| 4 | Jenis peserta tidak dipilih | Browser meminta pengguna memilih salah satu radio button |
| 5 | Tidak memilih topik minat | JavaScript menampilkan pesan agar memilih minimal satu topik |
| 6 | Program studi tidak dipilih | Browser meminta pengguna memilih bidang |
| 7 | Alasan mengikuti event kurang dari 20 karakter | Browser menolak karena tidak memenuhi batas minimal |
| 8 | File PDF tidak diunggah | Browser meminta file karena kolom wajib diisi |

Daftar pengujian lebih lengkap terdapat pada file `test-case.md`. Hasil aktual perlu dicatat berdasarkan pengujian langsung di browser.

## Validasi Client-Side dan Server-Side

Validasi client-side dilakukan oleh browser menggunakan atribut HTML5 seperti `required`, `minlength`, `maxlength`, `pattern`, dan `type="email"`, serta pemeriksaan tambahan menggunakan JavaScript.

Walaupun demikian, validasi server-side tetap wajib dilakukan apabila form nantinya dihubungkan dengan backend. Server perlu memeriksa ulang seluruh data, memastikan format dan ukuran file sesuai ketentuan, memeriksa isi file yang diunggah, serta mencegah data yang tidak valid atau berbahaya masuk ke sistem. Validasi browser saja belum cukup karena dapat dilewati atau dimanipulasi oleh pengguna.

## Catatan Project

Project ini merupakan latihan **front-end**. Form belum terhubung dengan backend dan database, sehingga data pendaftaran belum benar-benar disimpan. Pesan yang muncul setelah pemeriksaan berhasil hanya menandakan bahwa validasi pada browser telah lolos.

## Informasi Project

- **Nama Project:** Form Registrasi Event TechBloom 2026
- **Jenis Project:** Event Registration Form
- **Mata Kuliah:** Desain Web
- **Tugas:** Tugas Individu Pertemuan 8
- **Teknologi:** HTML5, CSS3, dan JavaScript
- **Tahun:** 2026

---

Dibuat untuk memenuhi Tugas Individu Desain Web Pertemuan 8.
