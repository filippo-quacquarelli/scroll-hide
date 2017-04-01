
(function($) {

    $.fn.scrollHide = function(options) {

        var scrolling = false,
            previousTop = 0,
            currentTop = 0,
            $this = $(this);

        var settings = $.extend({ // opzioni del plugin
            scrollDelta: 5, // la velocità di scroll per far scomparire il menu
            scrollOffset: 200, // dopo quanto scompare il menu
            scrollClass: 'scrh-header', // la classe da aggiungere al menu per gli stili css
            scrollClassHide: 'scrh-hide', // la classe da aggiungere al menu per farlo scomparire
            onScroll: function(context, msg) { // callback il primo argomento è this, il secondo è il messaggio da ritornare
              return msg;
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
                $this.removeClass(settings.scrollClassHide);

                settings.onScroll( $this, "up" );

            } else if (currentTop - previousTop > settings.scrollDelta && currentTop > settings.scrollOffset) {
                $this.addClass(settings.scrollClassHide);

                settings.onScroll( $this, "down" );
            }
        }

        $(window).on('scroll', function() {
            if( !scrolling ) {
                scrolling = true;

                (!window.requestAnimationFrame) // per la retrocompatibilità verifichiamo che requestAnimationFrame sia disponibile
                ? setTimeout(scrollValue, 250)
                : requestAnimationFrame(scrollValue);
            }
        });
        // rende il plugin "chainable"
        return this;
    };
})(jQuery);
