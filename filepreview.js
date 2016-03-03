/*

  filepreview : A file preview generator for node.js

*/

var child_process = require('child_process');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var mimedb = require('./db.json');

module.exports = {
  generate: function(input, output, callback) {
    // Check for supported output format
    var extOutput = path.extname(output).toLowerCase().replace('.','');
    var extInput = path.extname(input).toLowerCase().replace('.','');

    if (
      extOutput != 'gif' &&
      extOutput != 'jpg' &&
      extOutput != 'png'
    ) {
      return callback(true);
    }

    var fileType = 'other';

    root:
    for ( var index in mimedb ) {
      if ( 'extensions' in mimedb[index] ) {
        for ( var indexExt in mimedb[index].extensions ) {
          if ( mimedb[index].extensions[indexExt] == extInput ) {
            if ( index.split('/')[0] == 'image' ) {
              fileType = 'image';
            } else if ( index.split('/')[0] == 'video' ) {
              fileType = 'video';
            } else {
              fileType = 'other';
            }

            break root;
          }
        }
      }
    }

    if ( extInput == 'pdf' ) {
      fileType = 'image';
    }

    try {
        stats = fs.lstatSync(input);

        if (!stats.isFile()) {
          return callback(true);
        }
    } catch (e) {
        return callback(true);
    }

    if ( fileType == 'video' ) {
      try {
        child_process.execSync('ffmpeg -i \"' + input + '\" -vf  "thumbnail,scale=640:360" -frames:v 1 \"' + output + '\"');
        return callback();
      } catch (e) {
        return callback(true);
      }
    }

    if ( fileType == 'image' ) {
      try {
        child_process.execSync('convert \"' + input + '\" \"' + output + '\"');
        return callback();
      } catch (e) {
        return callback(true);
      }
    }

    if ( fileType == 'other' ) {
      try {
        var hash = crypto.createHash('sha512');
        hash.update(Math.random().toString());
        hash = hash.digest('hex');

        var tempPDF = '/tmp/'+ hash + '.pdf';

        child_process.execSync('unoconv -e PageRange=1 -o ' + tempPDF + ' \"' + input + '\"');
        child_process.execSync('convert ' + tempPDF + '[0] \"' + output + '\"');
        fs.unlinkSync(tempPDF);

        return callback();
      } catch (e) {
        return callback(true);
      }
    }

  },
  generateSync: function(input, output) {
    // Check for supported output format
    var extOutput = path.extname(output).toLowerCase().replace('.','');
    var extInput = path.extname(input).toLowerCase().replace('.','');

    if (
      extOutput != 'gif' &&
      extOutput != 'jpg' &&
      extOutput != 'png'
    ) {
      return false;
    }

    var fileType = 'other';

    root:
    for ( var index in mimedb ) {
      if ( 'extensions' in mimedb[index] ) {
        for ( var indexExt in mimedb[index].extensions ) {
          if ( mimedb[index].extensions[indexExt] == extInput ) {
            if ( index.split('/')[0] == 'image' ) {
              fileType = 'image';
            } else if ( index.split('/')[0] == 'video' ) {
              fileType = 'video';
            } else {
              fileType = 'other';
            }

            break root;
          }
        }
      }
    }

    if ( extInput == 'pdf' ) {
      fileType = 'image';
    }
    
    try {
        stats = fs.lstatSync(input);

        if (!stats.isFile()) {
          return false;
        }
    } catch (e) {
        return false;
    }

    if ( fileType == 'video' ) {
      try {
        child_process.execSync('ffmpeg -i \"' + input + '\" -vf  "thumbnail,scale=640:360" -frames:v 1 \"' + output + '\"');
        return true;
      } catch (e) {
        return false;
      }
    }

    if ( fileType == 'image' ) {
      try {
        child_process.execSync('convert \"' + input + '\" \"' + output + '\"');
        return true;
      } catch (e) {
        return false;
      }
    }

    if ( fileType == 'other' ) {
      try {
        var hash = crypto.createHash('sha512');
        hash.update(Math.random().toString());
        hash = hash.digest('hex');

        var tempPDF = '/tmp/'+ hash + '.pdf';

        child_process.execSync('unoconv -e PageRange=1 -o ' + tempPDF + ' \"' + input + '\"');
        child_process.execSync('convert ' + tempPDF + '[0] \"' + output + '\"');
        fs.unlinkSync(tempPDF);

        return true;
      } catch (e) {
        return false;
      }
    }
  }
};
