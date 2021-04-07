(function ($) {
    "use strict";
    
/* ==========================================================================
   //menu-activetion
========================================================================== */

  
/* ==========================================================================
  // header stickey activation
========================================================================== */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

/* ==========================================================================
   //testimonials-active
========================================================================== */
    $('.testimonials-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            }
          
        ]
    });



  /* ==========================================================================
   //nav
  ========================================================================== */

  var topMenu = jQuery(".header-section #mobile-menu ,.mobile-menustyle1.mean-container .mean-nav"),
  offset = 67,
  topMenuHeight = topMenu.outerHeight() + offset,
  // All list items
  menuItems = topMenu.find('a[href*="#"]'),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var href = jQuery(this).attr("href"),
      id = href.substring(href.indexOf('#')),
      item = jQuery(id);
    //console.log(item)
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
jQuery(window).scroll(function () {
  // Get container scroll position
  var fromTop = jQuery(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if (jQuery(this).offset().top < fromTop)
      return this;
  });

  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  menuItems.parent().removeClass("active");
  if (id) {
    menuItems.parent().end().filter("[href*='#" + id + "']").parent().addClass("active");
  }
});  
  /* ==========================================================================
   //custom video player active
  ========================================================================== */
const player = new Plyr('#player', {});

})(jQuery);	    
const navbar = document.querySelector( ".navbar" );
a = navbar.querySelectorAll( "a" );


a.forEach( function ( element ) {
    element.addEventListener( "click", function () {
        for ( let i = 0; i < a.length; i++ ) {
            a[ i ].classList.remove( "active" );
        }

        this.classList.add( "active" )
        document.querySelector( ".navbar" ).classList.toggle( "show" );
        $( ".navbar-collapse" ).collapse( "hide" );

    } )
} )