// console.log("\n === PROGRAM SAPAAN PERTAMA DIMULAI ===")

// let userName = prompt("Halo Siapa Namamu?: ");
// let useryear = prompt("Lahir tahun berapa?: ");

// let tahunsekarang = 2026;
// let ulangtahun = Number(useryear); // Ubah String ke number
// let umur = tahunsekarang - ulangtahun;

// alert(`Selamat datang ${userName}, Sekarang umurmu: ${umur} tahun`);

console.log("Selamat datang diperhitungan");

let nama = prompt("Masukkan Namamu");
alert(`Halo ${nama}, Selamat datang di dunia perhitungan (-,+,*,/,%)`);

let inputangka = prompt("Masukkan angka pertama");
let inputangka1 = prompt("Masukkan angka kedua: ");
let hasil1 = inputangka + inputangka1;


let angka1 = Number(inputangka);
let angka2 = Number(inputangka1);
let hasil = angka1 + angka2;
alert(`Hasil dari ${angka1} + ${angka2} = ${hasil}`);
alert(`Hasil dari (tpi string): ${inputangka} + ${inputangka1}= ${hasil1}`);

console.log("angka pertama: ", angka1);
console.log("angka kedua: ", angka2);
console.log(`Proses: ${angka1} + ${angka2}`);
console.log(`Maka hasilnya: ${hasil}`);
console.log("\n Sedangkan hasil dari string: ", inputangka, "+", inputangka1, "=", hasil1);
