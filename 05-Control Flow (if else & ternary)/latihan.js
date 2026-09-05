const inputnama = prompt("Masukkan nama Siswa:");
const inputnilai = prompt("Masukkan nilai 1-100");

nilai = Number(inputnilai);

if (nilai >= 88){
    console.log(`Nama ${inputnama}, LULUS dengan nilai Sangat Baik (${nilai})`);
    alert(`nama ${inputnama}, LULUS dengan nilai Sangat Baik (${nilai})`);
}
else if (nilai >= 80){
    console.log(inputnama)
    console.log(`Nama ${inputnama}, LULUS dengan nilai Baik (${nilai})`);
    alert(`Nama ${inputnama}, LULUS dengan nilai Baik (${nilai})`);
}
else if (nilai >=75){
    console.log(`Nama ${inputnama}, LULUS dengan nilai Cukup (${nilai})`);
    alert(`Nama ${inputnama}, LULUS dengan nilai Cukup (${nilai})`);
}
else{
    console.log(`Nama ${inputnama}, TIDAK LULUS dengan nilai Kurang Cukup (${nilai})`);
    alert(`Nama ${inputnama}, TIDAK LULUS dengan nilai Kurang Cukup (${nilai})`);
}