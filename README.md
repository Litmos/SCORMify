SCORMIFY SAMPLE COURSE
==================

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