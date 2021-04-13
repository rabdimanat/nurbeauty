(function ($) {

    "use strict";

    $(document).ready(function () {


        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="flaticon-down-arrow-1"></span></div>');


            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });


            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').on('click', function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }



        if ($('.team-carousel').length) {
            $('.team-carousel').owlCarousel({
                loop:true,
                margin:30,
                dots:false,
                nav:true,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    575:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });         
        }

        if ($('.testimonial-wrap').length) {
            $('.testimonial-wrap').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                active: true,
                smartSpeed: 1000,
                mouseDrag: false,
                touchDrag: false,
                autoplay: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });         
        }
        
        
        var $grid = $('.gallery-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {

                columnWidth: 1,
            }
        });


        if ($('.gallery-popup-link').length) {
            $('.gallery-popup-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                },
            });
        }

        

        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }


        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');

                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        

        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', 
                animateClass: 'animated', 
                offset: 0,
                mobile: false,
                live: true 
            });
            wow.init();
        }
        
        
   
        if($('#map').length !== 0){
            var map = L.map('map', {
                center: [-6.185033, 106.798862],
                zoom: 18,
                zoomControl: false,
                scrollWheelZoom: true,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
        }


    });

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        
        if ($(window).innerWidth() >= mobileWidth) {
            navcollapse.children('ul').hide();
            navcollapse.children('.megamenu').hide();
        }

    });



    $(window).on('scroll', function () {

        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    $(window).on('load', function () {

        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
        

        var $grid = $('.gallery-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {

                columnWidth: 1,
            }
        });
        
        
    });



})(window.jQuery);
