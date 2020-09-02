$(document).ready(function () {
    $(function () {
        $('.center').slick({
            centerMode: true,
            centerPadding: '220px',
            autoplay: false,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            focusOnSelect: true,
            speed: 1500,
            infinite: true,
            cssEase: 'ease-in-out',
            touchThreshold: 100,
            prevArrow: '.btn-prev',
            nextArrow: '.btn-next',
            asNavFor: '.slider-text',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
        });
        $('.slider-text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.center',
            speed: 1500,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }]
        });
    })
    $(".center").on('afterChange', function (event, slick, currentSlide) {
        $("#cp").text(currentSlide + 1);
    });
    var rellax = new Rellax('.rellax');
    if ($(window).scrollTop() >= 20) {
        $('header').addClass('sticky');
        $(".logo img").attr("src", "img/short_logo.png")
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
            $('header').addClass('sticky');
            $(".logo img").attr("src", "img/short_logo.png")
        } else {
            $('header').removeClass('sticky');
            $(".logo img").attr("src", "img/full_logo.png")
        }
    })
    var kursorx = new kursor({
        type: 4,
        color: '#ADC62C',
    })
    var x;
    $(window).on('resize scroll update', function () {
        x = $(window).scrollTop();
        if ($(window).width() < 960) {
            $('.screen-2').css('background-size', 'cover');
            $('.screen-3').css('background-size', 'cover');
        }
        else {
            $('.screen-2').css('background-size', 100 + parseInt(x / 90, 0) + '% ');
            $('.screen-3').css('background-size', 100 + parseInt(x / 90, 0) + '% ');
        }
    })
    var waypoint = new Waypoint({
        element: $('.subtitle'),
        handler: function (direction) {
            $('.circle-text').addClass('animated bounceInLeft');
            $('.circle-text').css("opacity", "1")
        }
    })
    $(".circle-svg").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: false,
        maxGlare: 0.2,
        scale: 1.02
    });
    $('.burger-svg').click(function () {
        $(".mobile-nav").addClass('move');
        $("body").addClass('move');
        $(".overlay-nav").addClass('visibility');
    });
    $('.close-nav').click(function () {
        $(".mobile-nav").removeClass('move');
        $("body").removeClass('move');
        $(".overlay-nav").removeClass('visibility');
    });
});