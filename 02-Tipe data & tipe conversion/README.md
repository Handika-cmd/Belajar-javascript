A. TIPE DATA DI JAVASCRIPT

    JavaScript punya dua kategori besar: Primitive dan Non-Primitive (Object).

    1. Primitive Types
        -string (teks)
            let nama = "handika";
        
        -number (angka) integer dan float
            let umur = 20;
        
        -Boolean (True/False)
            let isStudent = true;
        
        -Null (nilai kosong diset manual)
            let kosong = null;
        
        -undefined (variabel belum diberi nilai)
            let belumisi;
            console.log(belumisi); //undefined

        -symbol (unik identifier)
            let id = Syimbol("id");
        
        -biglnt (angka sangat besar)
            let big = 123456789012345678901234567890n;
    

    2. Non-Primitive Types
        -Object (kumpulan key-value)
            let siswa = {nama: "Handika", umur: 20};
        
        -Array (Daftar nilai)
            let angka = [1, 2, 3];
        
        -Function (blok kode yang bisa dipanggil)
            function halo() {console.log("Halo!"); }


B. KONVERSI TIPE DATA (type conversion)

    1. Implicit Converion (Type coercion)
        Javascript otomatis mengubah tipe data saat operasi:
            console.log("5" + 2); //hasilnya "52" string + number

            console.log("5"-2); //hasilnya 3 (string --> number)
    
    2. Explicit Conversion (Manual)
         -String() (ubah ke string)
            let num = 123;
            console.log(String(num)); hasilnya "123"
        
        -Number() (ubah ke number)
            let str = "456";
            console.log(Number(str)); hasilnya 456