$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 70) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }
    });
    new WOW().init();

    ///////// **Select & date** /////////
    if ($(window).width() > 991) {
        $('select').select2({
            minimumResultsForSearch: Infinity,
        });
        $('.modal-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.order-modal')
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

    ///////// **nums** /////////

    var a = 0;
    $(window).scroll(function () {
        if ($("div").hasClass("nums")) {
            if (a === 0 && $(this).scrollTop() >= ($(".nums").offset().top) - 500) {
                $('.num-count span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1
            }
        }
        if ($(this).scrollTop() >= 38) {
            $('.fixed-header').addClass("fixed-scroll");
        } else {
            $('.fixed-header').removeClass("fixed-scroll");
        }

    });


    ///////// **feat Slider** /////////
    var featswiper = new Swiper('.feats-slider .swiper-container', {
        loop: true,

        pagination: {
            el: '.feats-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
                simulateTouch: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                simulateTouch: true,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                simulateTouch: true,
                autoplay: {
                    delay: 5000,
                },
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
                simulateTouch: false,
            },
        },
    });
    ///////// **cat Slider** /////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    ///////// **Partner Slider** /////////
    var Partnerswiper = new Swiper('.Partners-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.Partners-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.Partners-slider .swiper-button-next',
            prevEl: '.Partners-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    //////////** testimonials slider **//////////
    var testimonialsswiper = new Swiper('.testimonials-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.testimonials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-slider .swiper-button-next',
            prevEl: '.testimonials-slider .swiper-button-prev',
        },
    });
    //////////** aside **//////////

    if ($(window).width() <= 991) {
        $(".products-container").addClass("swiper-container");
        $(".products-wrapper").addClass("swiper-wrapper");
        $(".products-slide").addClass("swiper-slide");
        $(".products-container").removeClass("products-container");
        $(".products-wrapper").removeClass("products-wrapper");
        $(".products-slide").removeClass("products-slide");
        var offersswiper = new Swiper('.offers-products-slider .swiper-container', {
            loop: true,
            pagination: {
                el: '.offers-products-slider .swiper-pagination',
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
            },
        });
    }
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

    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $('.menu-ico').click(function () {
            $("nav").addClass("active");
            $("body").addClass("overflow");
        });
        $('.close-menu').click(function () {
            $("nav").removeClass("active");
            $("body").removeClass("overflow");
        });
    }
    ///////// **acc** /////////
    if ($(window).width() <= 991) {
        $('.mobile-list-btn').click(function () {
            $(".acc-list").slideToggle();
            $(".mobile-list-btn").toggleClass("active");
        });
    }
    //////////** modal btn **//////////
    $('.modal-btn').click(function () {
        $(".overlay").fadeIn(300);
        $(".modal-absolute").fadeIn(350);
        $(".mo-modal").addClass("open");
        $("body").addClass("overflow");
    })
    $('.close-modal,.overlay,.continue').click(function () {
        $(".overlay").fadeOut(350);
        $(".modal-absolute").fadeOut(300);
        $(".mo-modal").removeClass("open");
        $("body").removeClass("overflow");
    })

    ///////// **order modal** /////////
    $(".modal-select").change(function () {
        if ($(this).val() == "new") {
            $(".order-add-camp").slideDown();
            $(".order-modal").addClass("active");
        } else {
            $(".order-add-camp").slideUp();
            $(".order-modal").removeClass("active");
        }
    });

    $('.order-btn').click(function () {
        $(".overlay").fadeIn(300);
        $(".order-modal").fadeIn(350);
        $(".order-modal .mo-modal").addClass("open");
        $("body").addClass("overflow");
    })

    $('.order-sub').click(function (e) {
        e.preventDefault()
        $(".overlay").fadeIn(300);
        $(".order-modal").fadeOut(350);
        $(".order-modal .mo-modal").removeClass("open");

        $(".succes-modal").fadeIn(350);
        $(".succes-modal .mo-modal").addClass("open");
        $("body").addClass("overflow");
    })
});


