$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    ///////// **Select & date** /////////
    if ($(window).width() > 991) {
        $('select').select2({
            minimumResultsForSearch: Infinity,
        });
        $('.sort-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.order-fltr')
        });
    }
    if ($(window).width() <= 991) {
        $("select:not(.sort-select)").addClass("mobile-select");
        $("select:not(.sort-select)").wrap('<div class="mobile-select-cont"></div>');
    }
    $('.date input').datepicker({});

    ///////// **Range Slider** /////////
    if ($('div').hasClass("range-slider")) {
        var slider = document.getElementById('range-slider');
        var Max = slider.getAttribute("maxValue");
        var Min = slider.getAttribute("minValue");
        noUiSlider.create(slider, {
            start: [Min, Max],
            connect: true,
            tooltips: [true, true],
            format: {
                from: Number,
                to: function (value) {

                    if (document.dir == 'rtl') {
                        return (parseInt(value));
                    } else {
                        return (parseInt(value));
                    }

                }
            },
            range: {
                'min': 0,
                'max': 500
            }
        });
    }
    //////////** aside **//////////

    if ($(window).width() <= 991) {
        $('.filter-icon').click(function () {
            $("aside").toggleClass("active");
            $("body").toggleClass("overflow");
        })
    }

    //////////** product-main slider **//////////
    var productphotoswiper = new Swiper('.product-photos-slider', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.product-photos-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-photos-slider .swiper-button-next',
            prevEl: '.product-photos-slider .swiper-button-prev',
        },
    });
    //////////** products slider **//////////
    var productswiper = new Swiper('.products-slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.products-slider .swiper-button-next',
            prevEl: '.products-slider .swiper-button-prev',
        },
        pagination: {
            el: '.products-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    });
    if ($(window).width() <= 991) {
        $(".pro-tools").unwrap().unwrap()
    }

    //////////** more content **//////////
    $('.more-content').click(function () {
        $(this).toggleClass("active");
        $(this).siblings().toggleClass("active");
    })
    //////////** file **//////////

    $(".acc-file").change(function () {
        var file = $('.acc-file')[0].files[0]
        if (file) {
            $(".file-cont .acc-input").text(file.name)
        }
    });
});



