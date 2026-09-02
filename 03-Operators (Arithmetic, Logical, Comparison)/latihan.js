// ==== Latihan Membuat kalkulator === //

/*1. aritmatic */
console.log("=== Aritmatic ===")
let angka = 17;
let angka2 = 10;

console.log("Jumlah 17 + 10 =", angka + angka2);
console.log("Pengurangan 17-10 =", angka - angka2);
console.log("Perkalian 17 * 10 =", angka * angka2 );
console.log("Pembagian 17 / 10 =", angka / angka2);
console.log("Bagi sisa dari 17 % 10 =", angka % angka2);

// === COMPARISON OPERATOR ===
console.log("\n\n --- COMPARISON ---")

let a = 5;
let b = "5";

console.log("(5 == '5'): ", a == b, "-> (TRUE) Nilainya sama" );
console.log("(5 === '5'): ", a === b, "-> (FALSE) Nilainya beda karna number vs string")



//  === LOGICAL OPERATORS ===
console.log("\n\n --- LOGICAL ---");

let latihan = true;
let tidaklatihan = false;

// and &&
console.log("Latihan dan sakit:", latihan && tidaklatihan); // "Keduanya harus true"
// or ||
console.log("Latihan dan Sehat: ", latihan || tidaklatihan); //"Salah satu harus tru (||)"

// not !, Membalikkan kondisi
console.log("latihan: ", !tidaklatihan)
