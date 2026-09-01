let produkName = "Laptop Gaming";
let harga = 700000;
let tersedia = true;
let stok = null;
let diskon;

console.log("--- Tipe Data Awal ---");
console.log("Nama Produk:", produkName, "->", typeof produkName);
console.log("Harga:", harga, "->", typeof harga);
console.log("Tersedia:", tersedia, "->", typeof tersedia);
console.log("Stok:", stok, "->", typeof stok);
console.log("Diskon:", diskon, "->", typeof diskon);

// konversi data//
console.log("\n\n--- Konversi data ---");

let pricefromstring = "17000";
console.log("Sebelum Konversi '17000' ->", typeof pricefromstring);

/* mengubah string ke number */
let convertedprice =  Number(pricefromstring);
console.log("Setelah dikonversi 17000 ->", typeof convertedprice);

/* Operasi matematika (jika string tidak dikonversi, "17" + 3 = 173 bukan 20) */
let tax = 3000;
let totalpayment = convertedprice + tax;
console.log("Total Payment (tax + convertedprice)= Rp", totalpayment)

/* Mengubah number ke string*/
let finallaporan = String(totalpayment);
console.log("Laporan akhir string: Rp", finallaporan);


/* Keanehan Javascript (implicit conversion dan coercion) */
console.log("\n\n--- KEANEHAN JAVASCRIPT (hati-hati!) ---");
console.log("\n--- KEANEHAN JS (Hati-hati!) ---");
console.log("5 + 5 =", 5 + 5, "10 (Number + Number = Math operation)");
console.log('"5" + 5 =', "5" + 5, "-> '55' (String + Number = Concatenation/Gabungan teks)");
console.log('"5" - 5 =', "5" - 5, "-> 0 (String - Number = JS otomatis mengubah ke Number)");