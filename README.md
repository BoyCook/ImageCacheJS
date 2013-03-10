## Description
Image cache for the client implemented in JavaScript, with JQuery wrapper.
This is very useful when you want to change an image in the client,
but you don't want the client to keep getting the image over the network

## Architecture
There are two components:

* ImageCache.js which loads and caches the images
* jquery.imagecache.js which is a wrapper around the cache to do the DOM updates

## Usage

JQuery plugin

    //Setup
    $().image('setup', {srcs: ['images/img1.png', 'images/img2.png']});
    //Usage
    $('.image-div').image({src: 'images/img1.png', title: 'My happy image'});

Core
    //Setup
    var images = new ImageCache(['images/img1.png', 'images/img2.png']);
    //Usage
    images.get('images/img2.png');
