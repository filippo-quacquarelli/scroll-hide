
(function($) {

    $.fn.scrollHide = function() {

        var scrolling = false,
            previousTop = 0,
            currentTop = 0,
            $this = $(this);

        var settings = $.extend({
            scrollDelta: 5,
            scrollOffset: 150,
            scrollClass: 'js-scrollhide',
            scrollClassHide: 'js-scrollhide-hide',
            onScrollDown: function(arg) {
              return arg;
            },
            onScrollUp: function(arg) {
              return arg;
            },
        }, options );

        $this.addClass(settings.scrollClass);

        function scrollValue() {
            var currentTop = $(window).scrollTop();

            scrollHideClass(currentTop);

            previousTop = currentTop;
            scrolling = false;
        }

        function scrollHideClass(currentTop) {

            if (previousTop - currentTop > settings.scrollDelta) {
                //if scrolling up
                $this.removeClass(settings.scrollClassHide);

                settings.onScrollUp( "up" );

            } else if (currentTop - previousTop > settings.scrollDelta && currentTop > settings.scrollOffset) {
                //if scrolling down
                $this.addClass(settings.scrollClassHide);

                settings.onScrollDown( "down" );
            }
        }

        $(window).on('scroll', function() {
            if( !scrolling ) {
                scrolling = true;

                (!window.requestAnimationFrame)
                ? setTimeout(scrollValue, 250)
                : requestAnimationFrame(scrollValue);
            }
        });
    };
})(jQuery);
