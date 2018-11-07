// C:\Users\flick\OneDrive\Documents\GitHub\learnyounodeProgram.js

//console.log("HELLO WORLD")

// for (i=2, sum=0; i < process.argv.length; i++) {
//     sum += +process.argv[i];
// };
// console.log(sum);

// var fs = require('fs');
// var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(lines);

// var fs = require('fs');
// var lines = fs.readFile(process.argv[2], 'utf8', function Callback (err, lines) {
//   console.log(lines.split('\n').length - 1);
// });

// var fs = require('fs');
// var path = require('path');
// var pathName = process.argv[2];
// var fileExt = "." + process.argv[3];
// fs.readdir(pathName, function ListDirFiles(err, list){
//   for (i=0; i < list.length; i++) {
//       //files.forEach(function (file)){ } would work fine too
//     if (path.extname(list[i]) === fileExt) {
//           console.log(list[i]);
//     }
//   }
// });

var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var fileExt = process.argv[3];
fs.readdir(pathName, function ListDirFiles(err, list) {
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === "." + fileExt) {
            console.log(list[i]);
        }
    }
});
