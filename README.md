SCORMIFY
=======

Create your own SCORM 1.2 compliant content that can be uploaded into any LMS

## A few rules...

* The starting point for your content must be the index.html page
* Index.html must reference scormify.js as this communicates with the LMS
* Don't modify the imsmanifest.xml unless you know what you're doing

## What content can I use?

You can use any content that you want including:

* Videos, images, audio, flash
* Links to other html pages. i.e. create a basic website with navigation.
* Javascript. Could be included in the package or referenced from another site like a CDN.
* Stylesheets

## Publish & Deploy

Once you're ready to deply you will need to zip all of your files ensuring that index.html and imsmanifest.xml are in the root of the zip.

You will then upload your new zip file to a SCORM compliant LMS.

_Note:_ A common mistake is to zip the folder that contains your content. In this case the folder becomes the root item of the zip which could prevent the destination LMS from being able to unpackage the SCORM correctly.

## License 

(The MIT License)

Copyright (c) 2012 Daniel Allen, Litmos.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.