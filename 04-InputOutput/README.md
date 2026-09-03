Input & Output (prompt, alert, console)

Penjelasan Singkat:
Dalam interaksi dasar di web, kita bisa menggunakan fungsi bawaan browser (Web API):

    1. Output:
         console.log(): Menampilkan data di Console browser. Sangat berguna untuk debugging (mencari bug) saat development.
         alert(): Menampilkan popup pesan peringatan ke pengguna. (Pengguna harus klik "OK" untuk melanjutkan).

    2. Input:
         prompt(): Menampilkan popup dengan kolom teks untuk meminta input dari pengguna. (Hasil input selalu bertipe String).
         confirm(): Menampilkan popup pertanyaan dengan tombol "OK" (menghasilkan true) dan "Cancel" (menghasilkan false).

Catatan: Di aplikasi nyata (modern), prompt dan alert jarang dipakai karena kurang bagus secara UI/UX, namun sangat penting untuk belajar fundamental logika di awal.