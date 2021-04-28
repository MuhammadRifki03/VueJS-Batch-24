//soal 1
var pertama = 'saya sangat senang hari ini';
var kedua = "belajar JAVASCRIPT itu keren";

var gabungan = pertama.substring(0, 4);
var gabungan1 = pertama.substring(12, 18);
var gabungan2 = kedua.substring(0, 18);

console.log(gabungan, gabungan1, gabungan2);


//soal 2
var kataPertama = 10;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 6;

console.log((kataKedua * kataKetiga) + (kataPertama + kataKeempat));


//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);