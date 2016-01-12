# About

filepreview : A file preview generator for node.js

Will generate a file preview (gif, jpg or png) of about 100 different document formats.

## Installation

filepreview depends on 'unoconv':

```
  $ apt-get install unoconv
```

Add support for ffmpegs

To install use npm:

```
  $ npm install filepreview
```

## Usage

```
  var filepreview = require('filepreview');

  filepreview.generate('/home/myfile.docx', '/home/myfile_preview.gif', function(err) {
    if (err) {
      return console.log('Oops, something went wrong.');
    }
    console.log('File preview is /home/myfile_preview.gif');
  });

```

## License

filepreview is released under the new BSD license.
