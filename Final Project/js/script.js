// Loader //
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut(1000);
});

// Scroll Animation //
window.sr = new ScrollReveal()

sr.reveal('.information', {
    interval: 800,
    distance:"50px",
    scale: "0.8",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('#personalInfo', {
    interval: 800,
    distance:"50px",
    scale: "0.8",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('.gallery', {
    interval: 800,
    distance:"50px",
    scale: "0.9",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('.carousel', {
    interval: 800,
    distance:"50px",
    scale: "0.9",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('#portfolio', {
    interval: 800,
    distance:"50px",
    scale: "0.8",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('#contactMe', {
    interval: 800,
    distance:"50px",
    scale: "0.8",
    reset: true,
    easing: 'ease-in',
});

sr.reveal('footer', {
    interval: 1000,
    distance:"20px",
    reset: true,
    easing: 'ease-in',
});

// Toggle button //

function playAudio(url) {
    new Audio(url).play();
}

$(document).ready(function(){
    $('.toggle').click(function(){
        $('body').toggleClass('colorful');
        $('.information').toggleClass('colorful');
        $('.toggle').toggleClass('active');
        $('.toggle').toggleClass('colorful');
        $('.ham-bar').toggleClass('colorful');
        $('.off-screen-container').toggleClass('colorful');
        $('.toggleTitleon').toggleClass('colorful');
        $('.toggleTitleoff').toggleClass('colorful');
        $('.side-block').toggleClass('colorful');
        $('.title').toggleClass('colorful');
        $('.personalPicture').toggleClass('colorful');
        $('.gallery__img').toggleClass('colorful');
        $('.gallery').toggleClass('colorful');
        $('#carouselExperiences').toggleClass('colorful');
        $('.portfolioImg').toggleClass('colorful');
        $('.overlay').toggleClass('colorful');
        $('.contactForm').toggleClass('colorful');
        $('footer').toggleClass('colorful');
        $('.card').toggleClass('colorful');
    })
})


// Card Z-Index //
$('.one').click(function(){
    $(this).css("z-index","3")
})

$('.one').mouseleave(function () {
    $(this).css("z-index", "1")
});

// Carousel //
$('.carousel').carousel({
    interval: 2000
  })