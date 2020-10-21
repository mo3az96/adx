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

    if ($(window).width() <= 991) {
        $('.filter-icon').click(function () {
            $("aside").toggleClass("active");
            $("body").toggleClass("overflow");
        })
    }

});



