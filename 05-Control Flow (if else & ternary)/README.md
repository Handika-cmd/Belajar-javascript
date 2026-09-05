# Control Flow: If Else & Ternary

## 1. Pengertian sederhana:
Control Flow = alur jalannya program. Kode JavaScript biasanya jalan dari atas ke bawah, satu per satu. Tapi kadang kita mau "belok" — "kalau ini, jalankan A; kalau itu, jalankan B."

##  2. If Statement
Pengertian sederhana:
"Kalau kondisi ini benar, jalankan kode ini."

### a. sintaks:
if (kondisi) {
  // kode yang dijalankan kalau kondisi BENAR
}

### b. Contoh:
const saldo = 5000;
const harga = 2000;

if (saldo >= harga){
    console.log("Transaksi berhasil);
}

## 3. If Else
Pengertian sederhana:
"Kalau kondisi ini benar, jalankan A. Kalau TIDAK, jalankan B."

### a. Sintaks
if (kondisi) {
  // A: jalankan kalau BENAR
} else {
  // B: jalankan kalau SALAH
}

### b. Contoh
const umur = 15;

if (umur >= 17) {
  console.log("Boleh nonton film dewasa");
} else {
  console.log("Maaf, umur belum cukup");
}

## 4. If Else If
Pengertian sederhana:
Banyak kondisi. Cek satu per satu dari atas. Kalau satu cocok, yang bawah di-skip.

### Sintaks
if (kondisi1) {
  // A
} else if (kondisi2) {
  // B
} else if (kondisi3) {
  // C
} else {
  // D (kalau semua di atas salah)
}

### Contoh kode
const nilai = 78;

if (nilai >= 85) {
  console.log("Predikat: A");
} else if (nilai >= 75) {
  console.log("Predikat: B");
} else if (nilai >= 60) {
  console.log("Predikat: C");
} else {
  console.log("Predikat: D");
}

Catatan: JavaScript cek dari atas ke bawah. Kalau sudah ketemu yang cocok, yang lain diabaikan. Makanya urutan kondisi harus benar!

## 5. Ternary Operator
Pengertian sederhana:
If Else yang ditulis dalam 1 baris. Cocok untuk kondisi simpel.
### Sintaks:
kondisi ? nilaiKalauBenar : nilaiKalauSalah;

### Contoh kode
const nilai = 80;
const hasil = nilai >= 75 ? "Lulus" : "Gagal";

console.log(hasil);  // "Lulus"

## Studi Kasus Nyata di Website
### Kasus 1: Cek Login
const isLogin = true;

if (isLogin) {
  console.log("Selamat datang!");
} else {
  console.log("Silakan login dulu.");
}

### Kasus 2: Diskon Member
const totalBelanja = 500000;
const isMember = true;
let diskon;

if (isMember && totalBelanja > 300000) {
  diskon = 0.2;  // 20% diskon
} else if (isMember) {
  diskon = 0.1;  // 10% diskon
} else {
  diskon = 0;    // Gak ada diskon
}

const totalBayar = totalBelanja * (1 - diskon);
console.log(`Total bayar: Rp ${totalBayar}`);

### Kasus 3: Ternary untuk Status
const stok = 5;
const statusProduk = stok > 0 ? "Tersedia" : "Habis";

console.log(statusProduk);  // "Tersedia"