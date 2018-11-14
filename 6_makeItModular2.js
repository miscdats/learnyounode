//File (2 of 2)
//module needed for Exercise 6 : Make It Modular!

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err)
      return callback(err);
    else {
      list = list.filter(function (file) {
        if (path.extname(file) === '.' + extension)
          return true;
      })
      return callback(null, list);
   }
  })
}
