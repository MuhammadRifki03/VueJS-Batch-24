//SOAL 1
var nilai = 75;

if ( nilai >= 85 ) {
    console.log("Index A")
}else if ( nilai >= 75 && nilai < 85) {
    console.log("Index B")
}else if ( nilai >= 65 && nilai < 75) {
    console.log("Index C")
}else if ( nilai >= 55 && nilai < 65) {
    console.log("Index D")
} else{
    console.log("Index E")
}


//SOAL 2
var tanggal = 03;
var bulan = 10;
var tahun = 2000;

var bulan = 1;
switch(bulan) {
  case 1:   { console.log('03 Oktober 2000'); break; }
  case 2:   { console.log('03 10 2000'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

//SOAL 3
var n = '';
for (var i = 0; i < 7; i++){
    for(var j = 0; j <= i; j++ ){
        n += '*';
    }
    n += '\n';
}
console.log(n);

//SOAL 4 
 
var m = ["i love programming", "i love Javascript", "i love VueJS"]
for ( i= 0; i < m.length; i++){
    console.log(i+". "+ m[i]);

}