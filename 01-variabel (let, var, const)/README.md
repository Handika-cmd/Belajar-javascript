Dalam JavaScript, ada tiga cara mendeklarasikan variabel: var, let, dan const. Perbedaan utamanya ada pada scope (cakupan), aturan re-declare, dan apakah nilainya bisa diubah. Secara praktik modern, gunakan const untuk nilai tetap, let untuk nilai yang bisa berubah, dan hindari var kecuali untuk kompatibilitas kode lama.

Konsep Dasar Variabel:
    Variabel adalah tempat menyimpan data (angka, teks, objek, dll.) agar bisa digunakan kembali dalam program.
    contoh; (silahkan lihat latihannya)
    let nama = "Handika";
    console.log(nama); ---> Outputnya: Handika

Perbedaan var, let, dan const
    var (lama): jarang, hanya untuk kode lama
    let(modern): jika nilai bisa berubah kemudian hari
    const(modern): jika nilai tetap

silahkan lihat contoh praktiknya di laman "latihan.js"


Rekomendasi Praktik Modern:
    Gunakan const secara default → lebih aman, mencegah perubahan tidak sengaja.
    Gunakan let hanya jika nilai variabel memang akan berubah.
    Hindari var kecuali untuk kompatibilitas dengan kode lama.