"use strict";

// Swiper init
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".slider_nav__pages",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return (
                '0<span class="' +
                currentClass +
                '"></span>' +
                " / " +
                '0<span class="' +
                totalClass +
                '"></span>'
            );
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: ".btn_next",
        prevEl: ".btn_prev",
    },
});
