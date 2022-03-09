/* var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan(){
    let asal = "Indonesia";
    a = 5;
    return console.log(
        "Perkenalkan nama saya "+
        nama +
        " nomor urut "+
        a + 
        " sekarang sedang mengikuti "+
        b +
        " berasal dari "+
        asal
    );
}

terdaftar = true;
if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
/*nama = b;*/

/* console.log("asal diakses = " + asal); *//*
console.log("a adalah = "+ a);
console.log("b adalah = "+ b);

perkenalan();

*/

/* 
Task 1 a 
Soal : Ambillah index ke-2 dalam array di baris 5 dan tampilkan dalam console
Jawab : 
var i2 = lengkap_arr[2];
console.log(i2); 
*/

/*
Task 1 b
Soal : Tampilkan baris 22 di dalam console
Jawab : 
ubah value variabel terdaftar dari false menjadi true 
terdaftar = true;
if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
*/

/*
Task 1 c
Soal : Pemanggilan function perkenalan pada baris 31
Jawab : 
Sebelum itu, tambahkan deklarasikan variabel a di dalam blok function perkenalan
a = 5; agar output muncul. Lalu panggil function dengan cara :
perkenalan()
*/

/* 
Task 1 d
Jawab : 
terdaftar = true;
if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
var nama = lengkap_arr[2];
console.log("array = "+nama); 

a = b;
console.log("a adalah = "+ a);
console.log("b adalah = "+ b);

perkenalan()
*/

/* Task 2 a
Soal : Kenapa baris 21,22,23 tidak tampil ?
Jawab : 
Karena statement kondisi tidak terpenuhi. Di awal, kita telah mendeklarasikan variabel terdaftar
sebagai false. Sedangkan, kondisinya apabila terdaftar == true, maka output akan dijalankan.
Sehingga, kondisi dilewatkan karena nilai variabel tidak sesuai dengan kondisi
*/

/* Task 2 b
Soal : Kenapa baris 26 error?
Jawab :
Karena variabel nama merupakan variabel const (konstanta) yang bersifat tidak bisa di reassignment.
Sehingga jika kita coba untuk mengubah nilainya, maka akan terjadi error.
*/

/* Task 2 c
Soal : Apabila baris ke 26 diberikan komen, apakah baris 28 dapat dieksekusi?
Jawab : 
Tetap tidak bisa. Karena baris 28 error disebabkan oleh variabel asal yang dideklarasikan di dalam blok function.
Yang berarti tidak dapat dideteksi di luar blok function itu sendiri. Sehingga, variabel asal pada baris 28
tidak mendeteksi nilai dari variabel asal yang bersembunyi di blok function. Jika ingin dieksekusi, maka
variabel asal harus dideklarasikan di luar blok function.
*/ 

/*Task no. 3
Soal : Lakukan destructuring pada kode berikut :
const foo = ["Budi", "Sita", "Ayu"];
Sehingga Budi tersimpan di variabel a, 
Sita tersimpan di variabel b,
Ayu tersimpan di variabel c

Jawab :
const foo = ["Budi", "Sita", "Ayu"];
const [a,b,c] = foo;
console.log(a,b,c);
*/

/* Task no. 4
Soal : Terdapat variabel seperti berikut
let bdays = ['10-17', '05-19', '20-19']
Ubahlah tanda - dalam variabel menjadi / sehingga output menjadi
['10/17', '05/19', '20/19']

Jawab : 
let bdays = ['10-17', '05-19', '20-19'];
let bday = bdays1.map(ubahSimbol);

function ubahSimbol(array){
    for (let element of array){
        if element == '-' {
            element == '/';
        }
    }
}
*/

/* Task no. 5
Soal : Terdapat variabel seperti berikut
let value = [1,2,3,4,5,6]
Kalikan setiap value dalam array tersebut dengan dua sehingga output menjadi
[2,4,6,8,10,12]

Jawab : 
let value = [1,2,3,4,5,6];
let times = value.map(x => x * 2);

console.log(times);
*/

/* Task no. 6
Soal : Terdapat variabel seperti berikut
let arr = [1.5, 2.56, 5.1, 12.33]
Bulatkan ke atas variabel dalam array tersebut sehingga output menjadi
[2, 3, 5, 12]

Jawab : 
let arr = [1.5, 2.56, 5.1, 12.33];
let bulat = arr.map(x => Math.ceil(x));

console.log(bulat);

*/





