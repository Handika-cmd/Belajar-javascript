/*--- Var ---*/
var x = 10;
var x = 20;  //bisa redeclare
x = 30;  //boleh reassign
console.log(x);

/*--- let ---*/
let y = 10;
// let y = 20;  //error: tidak bisa redeclare
y = 25; //boleh reasssign
console.log(y);

/*--- const ---*/
const z = 10;
// z =20; // error: tidak bisa reassign
console.log(z);

// block scope//
if (true){
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a); // 1 (var keluar blok)
console.log(b); // error
console.log(c); // error
