// console.log("\n === PROGRAM SAPAAN PERTAMA DIMULAI ===")

// let userName = prompt("Halo Siapa Namamu?: ");
// let useryear = prompt("Lahir tahun berapa?: ");

// let tahunsekarang = 2026;
// let ulangtahun = Number(useryear); // Ubah String ke number
// let umur = tahunsekarang - ulangtahun;

// alert(`Selamat datang ${userName}, Sekarang umurmu: ${umur} tahun`);


// ========== Latihan Kalkulator Sederhana ==========

console.log("===== Latihan Kalkulator sederhana =====");

alert(`Selamat datang di kalkulator sederhana`);

// 1. ambil input dari user (inget hasil prompt selalu string!)
let inputangka1 = prompt("Masukkan angka pertama: ");
let inputangka2 = prompt("Masukkan angka kedua: ")

// 2. konversi string menjadi number, gunakan Number();
let angka1 = Number(inputangka1);
let angka2 = Number(inputangka2);

// 3. sekarang kita melakukan operasi matematika (+) sisanya bebas mau menggunakan operator manapun
let hasil = angka1 + angka2;

// 4. Tampilin hasilnya ke user
alert(`Hasil jumlah dari: ${inputangka1} dan ${inputangka2} = ${hasil}`);

// Tampilkan ke console
console.log("user memasukkan angka pertama: ", angka1);
console.log("user memasukkan angka kedua: ", angka2)
console.log("Hasilnya: ",hasil)
