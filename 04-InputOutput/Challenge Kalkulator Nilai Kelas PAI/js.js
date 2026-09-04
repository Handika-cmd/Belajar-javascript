const tombol = document.getElementById("btnHitung");
console.log(tombol);
tombol.addEventListener("click", function() {
  console.log("Tombol diklik!");
});

tombol.addEventListener("click", function() {
  
  const nama = document.getElementById("nama").value;
  console.log("Nama:", nama);
  
});

tombol.addEventListener("click", function() {
  
  const nama = document.getElementById("nama").value;
  const tugas = document.getElementById("tugas").value;
  const uts = document.getElementById("uts").value;
  const uas = document.getElementById("uas").value;
  
  console.log("Nama:", nama);
  console.log("Tugas:", tugas);
  console.log("UTS:", uts);
  console.log("UAS:", uas);
  
});

tombol.addEventListener("click", function() {
  
  const nama = document.getElementById("nama").value;
  const tugas = document.getElementById("tugas").value;
  const uts = document.getElementById("uts").value;
  const uas = document.getElementById("uas").value;
  
  console.log("Nama:", nama);
  console.log("Tugas:", tugas);
  console.log("UTS:", uts);
  console.log("UAS:", uas);
  
});

  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);
  console.log("Tugas tipe:", typeof tugas);

  const nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
  console.log("Nilai Akhir:", nilaiAkhir);