# Test Case Validasi Form Registrasi Event

| No. | Field | Input uji | Hasil yang diharapkan | Hasil aktual |
|---|---|---|---|---|
| 1 | Nama lengkap | Dimas (3 karakter) | Diterima karena memenuhi minimal 3 karakter | Sesuai harapan |
| 2 | Nama lengkap | Al (2 karakter) | Ditolak karena kurang dari 3 karakter | Sesuai harapan |
| 3 | Email | dimas-email | Ditolak karena format email tidak valid | Sesuai harapan |
| 4 | Nomor telepon | 08123AB890 | Ditolak karena mengandung huruf dan tidak sesuai pola angka | Sesuai harapan |
| 5 | Jenis peserta | Tidak memilih radio | Ditolak karena pilihan wajib diisi | Sesuai harapan |
| 6 | Topik minat | Tidak mencentang checkbox apa pun | Ditolak oleh validasi JavaScript | Sesuai harapan |
| 7 | Program studi | Tetap pada pilihan awal | Ditolak karena nilai pilihan masih kosong | Sesuai harapan |
| 8 | Alasan | Saya ingin belajar (kurang dari 20 karakter) | Ditolak karena kurang dari 20 karakter | Sesuai harapan |
| 9 | Upload | Memilih file gambar JPG | Ditolak/tidak dapat dipilih melalui filter PDF; pemeriksaan JS juga memeriksa ekstensi | Sesuai harapan |
| 10 | Persetujuan | Tidak mencentang persetujuan | Ditolak karena wajib dicentang | Sesuai harapan |

## Lima skenario input salah utama
1. Nama hanya dua karakter.
2. Email tidak menggunakan format email yang benar.
3. Nomor telepon berisi huruf.
4. Tidak memilih jenis peserta atau topik minat.
5. Alasan terlalu pendek atau tidak mengunggah file PDF.

**Catatan:** Hasil aktual di atas merupakan hasil yang diharapkan dari pemeriksaan pada browser. Jalankan pengujian di browser untuk mengambil bukti screenshot dan mencatat hasil aktual sesuai pengujian yang benar-benar dilakukan.
