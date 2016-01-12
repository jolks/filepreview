# About

filepreview : A file preview generator for node.js

Will generate a file preview (gif, jpg or png) of about 100 different document formats.

If the format is not supported, it will tr

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

filepreview needs to run as 'root' (check for "Error: Unable to connect or start own listener. Aborting." fix)

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
