// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function membaca(time, books, i){
    if ( i < books.length){
        readBooks(time, books[i], function(nextBooks){
            if (nextBooks > 0){
                i += 1;
                membaca(nextBooks, books, i);
            }
        })
    }
}
membaca(10000, books, 0)