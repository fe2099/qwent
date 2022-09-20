const swiperThemeOne = new Swiper('.slider_theme_1', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 3,
    direction: 'horizontal',
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperThemeTwo = new Swiper('.slider_theme_2', {
    // Optional parameters
    spaceBetween: 32,
    slidesPerView: 2,
    direction: 'horizontal',
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperThemeTree = new Swiper('.slider_theme_3', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 1,
    direction: 'horizontal',
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});