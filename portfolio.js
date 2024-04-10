$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if($(this).scrollTop() > 500){
            $('.Scroll-up-btn').addClass("show");
        } else {
            $('.Scroll-up-btn').removeClass("show");
        }
    });
    
    $('.Scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

        // .typing .style.Color = "yellow"
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Software Engineer", "Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

