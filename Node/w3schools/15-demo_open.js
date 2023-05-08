var fs = require('fs');

//create an empty file named 'example_of_open.txt':
fs.open('example_of_open.txt', 'w', function(err, data) {
    if(err){
        throw err;
    }
    console.log("create empty file name or add text");
});

//? create an empty file 'example_of_open.txt' and if file has any text that will be removed.
