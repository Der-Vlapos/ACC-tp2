// НЕ ЛЕЗЬ, УБЬЕТ
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        mousewheel: {
            invert: false,
        },
        touchEventsTarget: 'container',
        slidesPerView: 4,
        spaceBetween: 10,
    });

    swiper.on('autoplayStart', function () {
        console.log('autoplay started');
    });

    swiper.on('autoplayStop', function () {
        console.log('autoplay stopped');
    });
});