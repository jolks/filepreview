/*

  filepreview : A file preview generator for node.js

*/

var child_process = require('child_process');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');

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

    try {
        stats = fs.lstatSync(input);

        if (!stats.isFile()) {
          return callback(true);
        }
    } catch (e) {
        return callback(true);
    }

    var ffmpeg_formats = child_process.execSync('ffmpeg -formats').toString().split('\n');
    var ffmpeg_exts = [];
    for ( var index in ffmpeg_formats ) {
      ffmpeg_exts.push(ffmpeg_formats[index].replace(' D  ', '').replace(' DE ', '').replace('  E ', '').replace('    ', '').split(' ')[0]);
    }

    var input_video_format = child_process.execSync("ffprobe " + input + " 2>&1 >/dev/null |grep Stream.*Video | sed -e 's/.*Video: //' -e 's/[, ].*//'").toString().replace('\n', '');

    if (ffmpeg_exts.indexOf(input_video_format) > -1 && input_video_format) {
      try {
        child_process.execSync('ffmpeg -i ' + input + ' -vf  "thumbnail,scale=640:360" -frames:v 1 ' + output);
        return callback();
      } catch (e) {
        return callback(true);
      }
    }

    try {
      var hash = crypto.createHash('sha512');
      hash.update(Math.random().toString());
      hash = hash.digest('hex');

      var tempPDF = '/tmp/'+ hash + '.pdf';

      child_process.execSync('unoconv -e PageRange=1 -o ' + tempPDF + ' ' + input);
      child_process.execSync('unoconv -f '+ extOutput + ' -o ' + output + ' ' + tempPDF);
      fs.unlinkSync(tempPDF);

      return callback();
    } catch (e) {
      return callback(true);
    }
  },
  generateSync: function(input, output) {
    // Check for supported output format
    var extOutput = path.extname(output).toLowerCase().replace('.','');

    if (
      extOutput != 'gif' &&
      extOutput != 'jpg' &&
      extOutput != 'png'
    ) {
      return false;
    }

    try {
        stats = fs.lstatSync(input);

        if (!stats.isFile()) {
          return false;
        }
    } catch (e) {
        return false;
    }

    var ffmpeg_formats = child_process.execSync('ffmpeg -formats').toString().split('\n');
    var ffmpeg_exts = [];
    for ( var index in ffmpeg_formats ) {
      ffmpeg_exts.push(ffmpeg_formats[index].replace(' D  ', '').replace(' DE ', '').replace('  E ', '').replace('    ', '').split(' ')[0]);
    }

    var input_video_format = child_process.execSync("ffprobe " + input + " 2>&1 >/dev/null |grep Stream.*Video | sed -e 's/.*Video: //' -e 's/[, ].*//'").toString().replace('\n', '');

    if (ffmpeg_exts.indexOf(input_video_format) > -1 && input_video_format) {
      try {
        child_process.execSync('ffmpeg -i ' + input + ' -vf  "thumbnail,scale=640:360" -frames:v 1 ' + output);
        return true;
      } catch (e) {
        return false;
      }
    }

    try {
      var hash = crypto.createHash('sha512');
      hash.update(Math.random().toString());
      hash = hash.digest('hex');

      var tempPDF = '/tmp/'+ hash + '.pdf';

      child_process.execSync('unoconv -e PageRange=1 -o ' + tempPDF + ' ' + input);
      child_process.execSync('unoconv -f '+ extOutput + ' -o ' + output + ' ' + tempPDF);
      fs.unlinkSync(tempPDF);

      return true;
    } catch (e) {
      return false;
    }
  }
};
