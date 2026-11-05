# Form Registrasi Event

Project tugas individu Desain Web – Pertemuan 8.

## Isi folder
- `index.html` : struktur form registrasi.
- `style.css` : tampilan desktop dan mobile.
- `script.js` : validasi tambahan menggunakan JavaScript.
- `test-case.md` : skenario pengujian validasi.
- `ringkasan.md` : ringkasan perubahan, masalah, solusi, dan validasi server.

## Cara menjalankan
1. Ekstrak folder project.
2. Buka folder `form_registrasi_event` menggunakan Visual Studio Code.
3. Buka file `index.html`.
4. Klik kanan lalu pilih **Open with Live Server**. Jika tidak memiliki Live Server, klik dua kali `index.html` untuk membukanya di browser.
5. Coba isi form dengan data benar dan beberapa data yang salah.

## Fitur dan validasi
- Radio button untuk memilih satu jenis peserta.
- Checkbox untuk memilih topik yang diminati.
- Select untuk memilih program studi/bidang.
- Textarea untuk menulis alasan mengikuti event.
- File upload untuk memilih dokumen PDF.
- Validasi HTML5: `required`, `minlength`, `maxlength`, `pattern`, dan `type="email"`.
- Validasi JavaScript: minimal satu topik harus dipilih dan file harus berekstensi PDF.

## Catatan
Project ini adalah contoh front-end. Pesan berhasil hanya menunjukkan bahwa pemeriksaan di browser lolos. Data belum disimpan karena belum terhubung ke backend/server. Validasi server tetap diperlukan.