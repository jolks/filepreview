# About

filepreview : A file preview generator for node.js

Will generate a file preview (gif, jpg or png) of about 450 different document formats.

See filepreview in action, watch this demo using Angular : https://vimeo.com/151667833

## Installation

filepreview depends on 'unoconv':

```
  $ apt-get install unoconv
```

filepreview depends on 'ffmpeg':


```
  $ apt-get install ffmpeg
```

filepreview depends on 'ImageMagick':

```
  $ apt-get install imagemagick
```


filepreview depends on 'curl':

```
  $ apt-get install curl
```

To install use npm:

```
  $ npm install filepreview
```

## Usage

Asynchronous with callback (if error, will return error in the callback) :

```javascript
  var filepreview = require('filepreview');

  filepreview.generate('/home/myfile.docx', '/home/myfile_preview.gif', function(error) {
    if (error) {
      return console.log(error);
    }
    console.log('File preview is /home/myfile_preview.gif');
  });

```

Synchronous (if error, will return false):

```javascript
  var filepreview = require('filepreview');

  if (!filepreview.generateSync('/home/myfile.docx', '/home/myfile_preview.gif')) {
    console.log('Oops, something went wrong.');
  } else {
    console.log('File preview is /home/myfile_preview.gif');
  };

```

You can specify a url instead of a file path, ie: http://www.myfile.com/my_file.doc, and filepreview will download it to generate its preview.

You can set options object for the preview generation. List of options available:-
* width
* height
* quality [see quality documentation](https://www.imagemagick.org/script/command-line-options.php#quality)

e.g.
```javascript
var options = {
  width: 640,
  height: 480,
  quality: 90
};

// Asynchronous
filepreview.generate('/home/myfile.docx', '/home/myfile_preview.gif', options, function(error) {...});

// Synchronous
filepreview.generateSync('/home/myfile.docx', '/home/myfile_preview.gif', options);
```

To be more stable, you can run `unoconv` as [listener](https://github.com/dagwieers/unoconv#start-your-own-unoconv-listener) before running the file preview generation.
```
$ unoconv --listener
$ node script_with_file_preview_generations.js
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

The following list of video formats are currently available for exporting to:
- 3g2             3GP2 (3GPP2 file format)
- 3gp             3GP (3GPP file format)
- 4xm             4X Technologies
- a64             a64 - video for Commodore 64
- aac             raw ADTS AAC (Advanced Audio Coding)
- ac3             raw AC-3
- act             ACT Voice file format
- adf             Artworx Data Format
- adp             ADP
- adts            ADTS AAC (Advanced Audio Coding)
- adx             CRI ADX
- aea             MD STUDIO audio
- afc             AFC
- aiff            Audio IFF
- alaw            PCM A-law
- alias_pix       Alias/Wavefront PIX image
- alsa            ALSA audio output
- amr             3GPP AMR
- anm             Deluxe Paint Animation
- apc             CRYO APC
- ape             Monkey's Audio
- apng            Animated Portable Network Graphics
- aqtitle         AQTitle subtitles
- asf             ASF (Advanced / Active Streaming Format)
- asf_stream      ASF (Advanced / Active Streaming Format)
- ass             SSA (SubStation Alpha) subtitle
- ast             AST (Audio Stream)
- au              Sun AU
- avi             AVI (Audio Video Interleaved)
- avisynth        AviSynth script
- avm2            SWF (ShockWave Flash) (AVM2)
- avr             AVR (Audio Visual Research)
- avs             AVS
- bethsoftvid     Bethesda Softworks VID
- bfi             Brute Force & Ignorance
- bin             Binary text
- bink            Bink
- bit             G.729 BIT file format
- bmp_pipe        piped bmp sequence
- bmv             Discworld II BMV
- boa             Black Ops Audio
- brender_pix     BRender PIX image
- brstm           BRSTM (Binary Revolution Stream)
- c93             Interplay C93
- caca            caca (color ASCII art) output device
- caf             Apple CAF (Core Audio Format)
- cavsvideo       raw Chinese AVS (Audio Video Standard) video
- cdg             CD Graphics
- cdxl            Commodore CDXL video
- cine            Phantom Cine
- concat          Virtual concatenation script
- crc             CRC testing
- dash            DASH Muxer
- data            raw data
- daud            D-Cinema audio
- dfa             Chronomaster DFA
- dirac           raw Dirac
- dnxhd           raw DNxHD (SMPTE VC-3)
- dpx_pipe        piped dpx sequence
- dsf             DSD Stream File (DSF)
- dsicin          Delphine Software International CIN
- dss             Digital Speech Standard (DSS)
- dts             raw DTS
- dtshd           raw DTS-HD
- dv              DV (Digital Video)
- dv1394          DV1394 A/V grab
- dvbsub          raw dvbsub
- dvd             MPEG-2 PS (DVD VOB)
- dxa             DXA
- ea              Electronic Arts Multimedia
- ea_cdata        Electronic Arts cdata
- eac3            raw E-AC-3
- epaf            Ensoniq Paris Audio File
- exr_pipe        piped exr sequence
- f32be           PCM 32-bit floating-point big-endian
- f32le           PCM 32-bit floating-point little-endian
- f4v             F4V Adobe Flash Video
- f64be           PCM 64-bit floating-point big-endian
- f64le           PCM 64-bit floating-point little-endian
- fbdev           Linux framebuffer
- ffm             FFM (FFserver live feed)
- ffmetadata      FFmpeg metadata in text
- film_cpk        Sega FILM / CPK
- filmstrip       Adobe Filmstrip
- flac            raw FLAC
- flic            FLI/FLC/FLX animation
- flv             FLV (Flash Video)
- framecrc        framecrc testing
- framemd5        Per-frame MD5 testing
- frm             Megalux Frame
- g722            raw G.722
- g723_1          raw G.723.1
- g729            G.729 raw format demuxer
- gif             GIF Animation
- gsm             raw GSM
- gxf             GXF (General eXchange Format)
- h261            raw H.261
- h263            raw H.263
- h264            raw H.264 video
- hds             HDS Muxer
- hevc            raw HEVC video
- hls             Apple HTTP Live Streaming
- hls,applehttp   Apple HTTP Live Streaming
- hnm             Cryo HNM v4
- ico             Microsoft Windows ICO
- idcin           id Cinematic
- idf             iCE Draw File
- iec61883        libiec61883 (new DV1394) A/V input device
- iff             IFF (Interchange File Format)
- ilbc            iLBC storage
- image2          image2 sequence
- image2pipe      piped image2 sequence
- ingenient       raw Ingenient MJPEG
- ipmovie         Interplay MVE
- ipod            iPod H.264 MP4 (MPEG-4 Part 14)
- ircam           Berkeley/IRCAM/CARL Sound Format
- ismv            ISMV/ISMA (Smooth Streaming)
- iss             Funcom ISS
- iv8             IndigoVision 8000 video
- ivf             On2 IVF
- j2k_pipe        piped j2k sequence
- jack            JACK Audio Connection Kit
- jacosub         JACOsub subtitle format
- jpeg_pipe       piped jpeg sequence
- jpegls_pipe     piped jpegls sequence
- jv              Bitmap Brothers JV
- latm            LOAS/LATM
- lavfi           Libavfilter virtual input device
- libcdio          
- libdc1394       dc1394 v.2 A/V grab
- libgme          Game Music Emu demuxer
- libmodplug      ModPlug demuxer
- live_flv        live RTMP FLV (Flash Video)
- lmlm4           raw lmlm4
- loas            LOAS AudioSyncStream
- lrc             LRC lyrics
- lvf             LVF
- lxf             VR native stream (LXF)
- m4v             raw MPEG-4 video
- matroska        Matroska
- matroska,webm   Matroska / WebM
- md5             MD5 testing
- mgsts           Metal Gear Solid: The Twin Snakes
- microdvd        MicroDVD subtitle format
- mjpeg           raw MJPEG video
- mkvtimestamp_v2 extract pts as timecode v2 format, as defined by mkvtoolnix
- mlp             raw MLP
- mlv             Magic Lantern Video (MLV)
- mm              American Laser Games MM
- mmf             Yamaha SMAF
- mov             QuickTime / MOV
- mov,mp4,m4a,3gp,3g2,mj2 QuickTime / MOV
- mp2             MP2 (MPEG audio layer 2)
- mp3             MP3 (MPEG audio layer 3)
- mp4             MP4 (MPEG-4 Part 14)
- mpc             Musepack
- mpc8            Musepack SV8
- mpeg            MPEG-1 Systems / MPEG program stream
- mpeg1video      raw MPEG-1 video
- mpeg2video      raw MPEG-2 video
- mpegts          MPEG-TS (MPEG-2 Transport Stream)
- mpegtsraw       raw MPEG-TS (MPEG-2 Transport Stream)
- mpegvideo       raw MPEG video
- mpjpeg          MIME multipart JPEG
- mpl2            MPL2 subtitles
- mpsub           MPlayer subtitles
- msnwctcp        MSN TCP Webcam stream
- mtv             MTV
- mulaw           PCM mu-law
- mv              Silicon Graphics Movie
- mvi             Motion Pixels MVI
- mxf             MXF (Material eXchange Format)
- mxf_d10         MXF (Material eXchange Format) D-10 Mapping
- mxf_opatom      MXF (Material eXchange Format) Operational Pattern Atom
- mxg             MxPEG clip
- nc              NC camera feed
- nistsphere      NIST SPeech HEader REsources
- nsv             Nullsoft Streaming Video
- nut             NUT
- nuv             NuppelVideo
- oga             Ogg Audio
- ogg             Ogg
- oma             Sony OpenMG audio
- openal          OpenAL audio capture device
- opengl          OpenGL output
- opus            Ogg Opus
- oss             OSS (Open Sound System) playback
- paf             Amazing Studio Packed Animation File
- pictor_pipe     piped pictor sequence
- pjs             PJS (Phoenix Japanimation Society) subtitles
- pmp             Playstation Portable PMP
- png_pipe        piped png sequence
- psp             PSP MP4 (MPEG-4 Part 14)
- psxstr          Sony Playstation STR
- pulse           Pulse audio output
- pva             TechnoTrend PVA
- pvf             PVF (Portable Voice Format)
- qcp             QCP
- qdraw_pipe      piped qdraw sequence
- r3d             REDCODE R3D
- rawvideo        raw video
- realtext        RealText subtitle format
- redspark        RedSpark
- rl2             RL2
- rm              RealMedia
- roq             raw id RoQ
- rpl             RPL / ARMovie
- rsd             GameCube RSD
- rso             Lego Mindstorms RSO
- rtp             RTP output
- rtp_mpegts      RTP/mpegts output format
- rtsp            RTSP output
- s16be           PCM signed 16-bit big-endian
- s16le           PCM signed 16-bit little-endian
- s24be           PCM signed 24-bit big-endian
- s24le           PCM signed 24-bit little-endian
- s32be           PCM signed 32-bit big-endian
- s32le           PCM signed 32-bit little-endian
- s8              PCM signed 8-bit
- sami            SAMI subtitle format
- sap             SAP output
- sbg             SBaGen binaural beats script
- sdl             SDL output device
- sdp             SDP
- sdr2            SDR2
- segment         segment
- sgi_pipe        piped sgi sequence
- shn             raw Shorten
- siff            Beam Software SIFF
- singlejpeg      JPEG single image
- sln             Asterisk raw pcm
- smjpeg          Loki SDL MJPEG
- smk             Smacker
- smoothstreaming Smooth Streaming Muxer
- smush           LucasArts Smush
- sol             Sierra SOL
- sox             SoX native
- spdif           IEC 61937 (used on S/PDIF - IEC958)
- spx             Ogg Speex
- srt             SubRip subtitle
- stl             Spruce subtitle format
- stream_segment,ssegment streaming segment muxer
- subviewer       SubViewer subtitle format
- subviewer1      SubViewer v1 subtitle format
- sunrast_pipe    piped sunrast sequence
- sup             raw HDMV Presentation Graphic Stream subtitles
- svcd            MPEG-2 PS (SVCD)
- swf             SWF (ShockWave Flash)
- tak             raw TAK
- tedcaptions     TED Talks captions
- tee             Multiple muxer tee
- thp             THP
- tiertexseq      Tiertex Limited SEQ
- tiff_pipe       piped tiff sequence
- tmv             8088flex TMV
- truehd          raw TrueHD
- tta             TTA (True Audio)
- tty             Tele-typewriter
- txd             Renderware TeXture Dictionary
- u16be           PCM unsigned 16-bit big-endian
- u16le           PCM unsigned 16-bit little-endian
- u24be           PCM unsigned 24-bit big-endian
- u24le           PCM unsigned 24-bit little-endian
- u32be           PCM unsigned 32-bit big-endian
- u32le           PCM unsigned 32-bit little-endian
- u8              PCM unsigned 8-bit
- uncodedframecrc uncoded framecrc testing
- v4l2            Video4Linux2 output device
- vc1             raw VC-1 video
- vc1test         VC-1 test bitstream
- vcd             MPEG-1 Systems / MPEG program stream (VCD)
- video4linux2,v4l2 Video4Linux2 device grab
- vivo            Vivo
- vmd             Sierra VMD
- vob             MPEG-2 PS (VOB)
- vobsub          VobSub subtitle format
- voc             Creative Voice
- vplayer         VPlayer subtitles
- vqf             Nippon Telegraph and Telephone Corporation (NTT) TwinVQ
- w64             Sony Wave64
- wav             WAV / WAVE (Waveform Audio)
- wc3movie        Wing Commander III movie
- webm            WebM
- webm_chunk      WebM Chunk Muxer
- webm_dash_manifest WebM DASH Manifest
- webp            WebP
- webp_pipe       piped webp sequence
- webvtt          WebVTT subtitle
- wsaud           Westwood Studios audio
- wsvqa           Westwood Studios VQA
- wtv             Windows Television (WTV)
- wv              raw WavPack
- x11grab         X11 screen capture, using XCB
- xa              Maxis XA
- xbin            eXtended BINary text (XBIN)
- xmv             Microsoft XMV
- xv              XV (XVideo) output device
- xwma            Microsoft xWMA
- yop             Psygnosis YOP
- yuv4mpegpipe    YUV4MPEG pipe

## License

filepreview is released under the new BSD license.
