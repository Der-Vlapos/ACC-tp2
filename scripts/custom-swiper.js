document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Autoplay configuration
        autoplay: {
            delay: 3000, // Change this value to adjust the delay between slides
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Enable mousewheel control (optional)
        mousewheel: {
            invert: false,
        },

        // Enable touch control (default enabled)
        touchEventsTarget: 'container',

        // Display multiple slides
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