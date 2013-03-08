
function ImageCache(srcs) {
    this.srcs = srcs;
    this.images = {};
    this.loadAll();
}

ImageCache.prototype.loadAll = function() {
    for (var i=0; i< this.srcs.length; i++) {
        this.load(this.srcs[i]);
    }
};

ImageCache.prototype.load = function(src) {
    var image = new Image();
    image.src = src;
    this.images[src] = image;
};

ImageCache.prototype.get = function(src) {
    if (this.images[src] == undefined) {
        this.load(src);
    }
    return this.images[src];
};
