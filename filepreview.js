/*

  filepreview : A file preview generator for node.js

*/

var child_process = require('child_process');
var crypto = require('crypto');
var path = require('path')

path.extname('index.html')

module.exports = {
  generate: function(input, output, callback) {
    // Check for supported output format
    var ext = path.extname(output).toLowerCase();

    if (
      ext != 'gif' &&
      ext != 'jpg' &&
      ext != 'png'
    ) {
      return callback(true);
    }

    var hash = crypto.createHash('sha512');
    hash.update(Math.random().toString());
    hash = hash.digest('hex');

    var tempPDF = '/tmp/'+ hash + '.pdf';

    // check if file exists

    try {
      child_process.execSync('unoconv -e PageRange=1 -o ' + tempPDF + ' ' + input);
      child_process.execSync('unoconv -f '+ ext +' ' + tempPDF + ' ' + output);
      fs.unlinkSync(tempPDF);

      return callback(null);
    } catch (ex) {
      callback(true);
    }
  }
};
