$(window).on("load", function() {

    $(".loader .inner").fadeOut(600, function() {
        $(".loader").fadeOut(751);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        }
    });


});

$(document).ready(function () {
    $('#slides').superslides({
        animation:'fade',
        play: 5000,
        pagination: false,
    });

    let typed = new Typed(".typed", {
        strings: ["Student.", "Web Developer.", "Front-end Developer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    let skillsTopOffset = $(".skillsSection").offset().top;
    let statsTopOffset = $(".statsSection").offset().top;
    let countUpFinished = false;

    $(window).scroll(function() {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
            $(".counter").each(function () {
                let element = $(this);
                let endVal = parseInt(element.text());

                element.countup(endVal);

                countUpFinished = true;
            })
        }
    });

    $("[data-fancybox]").fancybox();

    $(".filter #filters a").click(function (){

        $(".filter #filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,
            }
        });

        return false;
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;

        $("html, body").animate({ scrollTop: targetPosition - 65 }, "500");

    });



    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        var body = $("body");

        if ($(window).scrollTop() >= navTop ) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0 );
            body.removeClass("fixedNav");
        }


    }


});
