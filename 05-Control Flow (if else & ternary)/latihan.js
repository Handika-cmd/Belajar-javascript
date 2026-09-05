const inputumur = prompt("Masukkan umur: ");

umur = Number(inputumur);

if (umur >= 17){
    alert(`Boleh nonton karna umurmu ${umur}`)
    console.log("Boleh nonton");
}
else{
    alert(`Maaf, umurmu ${umur} tahun tidak bisa nonton`)
    console.log("Maaf, umur belum cukup");
}