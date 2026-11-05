# Ringkasan Pengerjaan

Pada tugas individu ini, saya membuat form registrasi event seminar teknologi menggunakan HTML, CSS, dan JavaScript. Form berisi kolom nama lengkap, email, nomor telepon, pilihan jenis peserta menggunakan radio button, topik yang diminati menggunakan checkbox, program studi menggunakan dropdown, alasan mengikuti event menggunakan textarea, serta unggah kartu identitas dalam format PDF. Saya juga menambahkan kolom persetujuan sebelum pendaftaran dikirim.

Perubahan yang saya lakukan adalah menambahkan tampilan yang lebih rapi, responsif, dan mudah digunakan pada desktop maupun perangkat mobile. Validasi HTML5 diterapkan melalui atribut required, minlength, maxlength, pattern, serta tipe input email. JavaScript digunakan untuk memastikan pengguna memilih minimal satu topik dan mengunggah file PDF.

Masalah yang mungkin terjadi adalah pengguna mengirim form tanpa mengisi bagian wajib, memasukkan nomor telepon dengan huruf, menulis alasan terlalu singkat, atau memilih file yang tidak sesuai. Solusinya adalah menggunakan validasi bawaan HTML5 dan pemeriksaan tambahan dengan JavaScript agar kesalahan dapat diketahui sebelum data dikirim.

Walaupun validasi browser membantu pengguna, validasi server tetap wajib dilakukan. Server harus memeriksa ulang seluruh data, format dan ukuran file, isi file yang diunggah, serta keamanan data karena validasi browser dapat dilewati atau dimanipulasi. Dengan demikian, data yang diterima server tetap harus diperiksa sebelum disimpan.