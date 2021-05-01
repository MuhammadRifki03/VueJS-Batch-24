//SOAL 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();
console.log(daftarHewan);


//SOAL 2
function introduce(data){
	
}

var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"

//SOAL 3
function hitung_huruf_vokal(str){
    var vokal = 'aiueoAIUEO';
	var count = 0;

	for (var x = 0; x < str.length; x++) {
		if (vokal.indexOf(str[x]) !== -1) {
			count++;
		}
	}
	return count;
}
    var hitung_1 = hitung_huruf_vokal("Muhammad")
    var hitung_2 = hitung_huruf_vokal("Iqbal")
console.log(hitung_1 , hitung_2) // 3 2

//SOAL 4
function hitung(){

}
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8

