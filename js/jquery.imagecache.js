
(function($) {
    var config = {};
    var methods = {
        setup: function(params) {
            config.cache = new ImageCache(params.srcs);
        },
		load: function(params) {
            var image = $(config.cache.get(params.src)).clone();
            if (params.title) {
                image.attr('title', params.title);
            }
            $(this).html(image);
		}
    };
    $.fn.image = function(params) {
        if (methods[params]) {
            return methods[params].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof params === 'object' || ! params) {
            var args = arguments;
            return this.each(function() {
                methods.load.apply(this, args);
            });
        } else {
            $.error('Method ' + params + ' does not exist on jQuery.image');
            return 0;
        }
    };
})(jQuery);
