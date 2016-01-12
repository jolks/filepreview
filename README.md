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

## Document formats

The following list of document formats are currently available for exporting to:
-  bib      - BibTeX [.bib]
-  doc      - Microsoft Word 97/2000/XP [.doc]
-  doc6     - Microsoft Word 6.0 [.doc]
-  doc95    - Microsoft Word 95 [.doc]
-  docbook  - DocBook [.xml]
-  html     - HTML Document (OpenOffice.org Writer) [.html]
-  odt      - Open Document Text [.odt]
-  ott      - Open Document Text [.ott]
-  ooxml    - Microsoft Office Open XML [.xml]
-  pdb      - AportisDoc (Palm) [.pdb]
-  pdf      - Portable Document Format [.pdf]
-  psw      - Pocket Word [.psw]
-  rtf      - Rich Text Format [.rtf]
-  latex    - LaTeX 2e [.ltx]
-  sdw      - StarWriter 5.0 [.sdw]
-  sdw4     - StarWriter 4.0 [.sdw]
-  sdw3     - StarWriter 3.0 [.sdw]
-  stw      - Open Office.org 1.0 Text Document Template [.stw]
-  sxw      - Open Office.org 1.0 Text Document [.sxw]
-  text     - Text Encoded [.txt]
-  txt      - Plain Text [.txt]
-  vor      - StarWriter 5.0 Template [.vor]
-  vor4     - StarWriter 4.0 Template [.vor]
-  vor3     - StarWriter 3.0 Template [.vor]
-  xhtml    - XHTML Document [.html]

The following list of graphics formats are currently available for exporting to:
-  bmp      - Windows Bitmap [.bmp]
-  emf      - Enhanced Metafile [.emf]
-  eps      - Encapsulated PostScript [.eps]
-  gif      - Graphics Interchange Format [.gif]
-  html     - HTML Document (OpenOffice.org Draw) [.html]
-  jpg      - Joint Photographic Experts Group [.jpg]
-  met      - OS/2 Metafile [.met]
-  odd      - OpenDocument Drawing [.odd]
-  otg      - OpenDocument Drawing Template [.otg]
-  pbm      - Portable Bitmap [.pbm]
-  pct      - Mac Pict [.pct]
-  pdf      - Portable Document Format [.pdf]
-  pgm      - Portable Graymap [.pgm]
-  png      - Portable Network Graphic [.png]
-  ppm      - Portable Pixelmap [.ppm]
-  ras      - Sun Raster Image [.ras]
-  std      - OpenOffice.org 1.0 Drawing Template [.std]
-  svg      - Scalable Vector Graphics [.svg]
-  svm      - StarView Metafile [.svm]
-  swf      - Macromedia Flash (SWF) [.swf]
-  sxd      - OpenOffice.org 1.0 Drawing [.sxd]
-  sxd3     - StarDraw 3.0 [.sxd]
-  sxd5     - StarDraw 5.0 [.sxd]
-  tiff     - Tagged Image File Format [.tiff]
-  vor      - StarDraw 5.0 Template [.vor]
-  vor3     - StarDraw 3.0 Template [.vor]
-  wmf      - Windows Metafile [.wmf]
-  xhtml    - XHTML [.xhtml]
-  xpm      - X PixMap [.xpm]

The following list of presentation formats are currently available for exporting to:
-  bmp      - Windows Bitmap [.bmp]
-  emf      - Enhanced Metafile [.emf]
-  eps      - Encapsulated PostScript [.eps]
-  gif      - Graphics Interchange Format [.gif]
-  html     - HTML Document (OpenOffice.org Impress) [.html]
-  jpg      - Joint Photographic Experts Group [.jpg]
-  met      - OS/2 Metafile [.met]
-  odd      - OpenDocument Drawing (Impress) [.odd]
-  odg      - OpenOffice.org 1.0 Drawing (OpenOffice.org Impress) [.odg]
-  odp      - OpenDocument Presentation [.odp]
-  pbm      - Portable Bitmap [.pbm]
-  pct      - Mac Pict [.pct]
-  pdf      - Portable Document Format [.pdf]
-  pgm      - Portable Graymap [.pgm]
-  png      - Portable Network Graphic [.png]
-  pot      - Microsoft PowerPoint 97/2000/XP Template [.pot]
-  ppm      - Portable Pixelmap [.ppm]
-  ppt      - Microsoft PowerPoint 97/2000/XP [.ppt]
-  pwp      - PlaceWare [.pwp]
-  ras      - Sun Raster Image [.ras]
-  sda      - StarDraw 5.0 (OpenOffice.org Impress) [.sda]
-  sdd      - StarImpress 5.0 [.sdd]
-  sdd3     - StarDraw 3.0 (OpenOffice.org Impress) [.sdd]
-  sdd4     - StarImpress 4.0 [.sdd]
-  sti      - OpenOffice.org 1.0 Presentation Template [.sti]
-  stp      - OpenDocument Presentation Template [.stp]
-  svg      - Scalable Vector Graphics [.svg]
-  svm      - StarView Metafile [.svm]
-  swf      - Macromedia Flash (SWF) [.swf]
-  sxi      - OpenOffice.org 1.0 Presentation [.sxi]
-  tiff     - Tagged Image File Format [.tiff]
-  vor      - StarImpress 5.0 Template [.vor]
-  vor3     - StarDraw 3.0 Template (OpenOffice.org Impress) [.vor]
-  vor4     - StarImpress 4.0 Template [.vor]
-  vor5     - StarDraw 5.0 Template (OpenOffice.org Impress) [.vor]
-  wmf      - Windows Metafile [.wmf]
-  xhtml    - XHTML [.xml]
-  xpm      - X PixMap [.xpm]

The following list of spreadsheet formats are currently available for exporting to:
-  csv      - Text CSV [.csv]
-  dbf      - dBase [.dbf]
-  dif      - Data Interchange Format [.dif]
-  html     - HTML Document (OpenOffice.org Calc) [.html]
-  ods      - Open Document Spreadsheet [.ods]
-  ooxml    - Microsoft Excel 2003 XML [.xml]
-  pdf      - Portable Document Format [.pdf]
-  pts      - OpenDocument Spreadsheet Template [.pts]
-  pxl      - Pocket Excel [.pxl]
-  sdc      - StarCalc 5.0 [.sdc]
-  sdc4     - StarCalc 4.0 [.sdc]
-  sdc3     - StarCalc 3.0 [.sdc]
-  slk      - SYLK [.slk]
-  stc      - OpenOffice.org 1.0 Spreadsheet Template [.stc]
-  sxc      - OpenOffice.org 1.0 Spreadsheet [.sxc]
-  vor3     - StarCalc 3.0 Template [.vor]
-  vor4     - StarCalc 4.0 Template [.vor]
-  vor      - StarCalc 5.0 Template [.vor]
-  xhtml    - XHTML [.xhtml]
-  xls      - Microsoft Excel 97/2000/XP [.xls]
-  xls5     - Microsoft Excel 5.0 [.xls]
-  xls95    - Microsoft Excel 95 [.xls]
-  xlt      - Microsoft Excel 97/2000/XP Template [.xlt]
-  xlt5     - Microsoft Excel 5.0 Template [.xlt]
-  xlt95    - Microsoft Excel 95 Template [.xlt]

The following list of open office formats are currently available for exporting to:

- Microsoft Word 6.0/95/97/2000/XP (.doc and .dot)
- Microsoft Word 2003 XML (.xml)
- Microsoft Word 2007 XML (.docx, .docm, .dotx, .dotm)
- Microsoft WinWord 5 (.doc)
- WordPerfect Document (.wpd)
- WPS 2000/Office 1.0 (.wps)
- .rtf, .txt, and .csv
- StarWriter formats (.sdw, .sgl, .vor)
- DocBook (.xml)
- Unified Office Format text (.uot, .uof)
- Ichitaro 8/9/10/11 (.jtd and .jtt)
- Hangul WP 97 (.hwp)
- T602 Document (.602, .txt)
- AportisDoc (Palm) (.pdb)
- Pocket Word (.psw)
- Microsoft Excel 97/2000/XP (.xls, .xlw, and .xlt)
- Microsoft Excel 4.x–5.0/95 (.xls, .xlw, and .xlt)
- Microsoft Excel 2003 XML (.xml)
- Microsoft Excel 2007 XML (.xlsx, .xlsm, .xltx, .xltm)
- Microsoft Excel 2007 binary (.xlsb)
- Lotus 1-2-3 (.wk1, .wks, and .123)
- Data Interchange Format (.dif)
- Rich Text Format (.rtf)
- Text CSV (.csv and .txt)
- StarCalc formats (.sdc and .vor)
- dBASE (.dbf)
- SYLK (.slk)
- Unified Office Format spreadsheet (.uos, .uof)
- .htm and .html files, including Web page queries
- Pocket Excel (pxl)
- Quattro Pro 6.0 (.wb2)
- Microsoft PowerPoint 97/2000/XP (.ppt, .pps, and .pot)
- Microsoft PowerPoint 2007 (.pptx, .pptm, .potx, .potm)
- StarDraw and StarImpress (.sda, .sdd, .sdp, and .vor)
- Unified Office Format presentation (.uop, .uof)
- CGM – Computer Graphics Metafile (.cgm)
- Portable Document Format (.pdf)

## License

filepreview is released under the new BSD license.
