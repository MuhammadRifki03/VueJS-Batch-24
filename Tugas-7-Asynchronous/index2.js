var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
 readBooksPromise.then(books) {
    if ( i < books.length){
        readBooksPromise(time, books[i], function(nextBooks){
            if (nextBooks > 0){
                i += 1;
                readBooksPromise(nextBooks, books, i);
            }
        })
    }
 })
 console.log(sisaWaktu)
 
