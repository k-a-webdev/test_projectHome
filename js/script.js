"use strict";

// Swiper init
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

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

// Active header
const header = document.querySelector("header");
const banner = document.querySelector("#home");
// const toTop = document.querySelector(".to_top");
const bannerY = banner.getBoundingClientRect().bottom;

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const headerItems = header.querySelectorAll("li");

const clearHeaderItems = () => {
    headerItems.forEach((el) => {
        el.classList.remove("active");
    });
};

document.addEventListener("scroll", function () {
    header.classList.toggle(
        "active",
        window.scrollY > header.getBoundingClientRect().top + 1
    );
    // window.scrollY / 2 > bannerY
    //     ? (toTop.style.display = "flex")
    //     : (toTop.style.display = "none");
    const homeTop = banner.getBoundingClientRect().top;
    const aboutTop = about.getBoundingClientRect().top;
    const projectsTop = projects.getBoundingClientRect().top;
    const contactTop = contact.getBoundingClientRect().top;

    if (homeTop <= 0) {
        clearHeaderItems();
        headerItems[0].classList.add("active")
    }
    if (aboutTop <= 500 && (aboutTop + about.querySelector('h1').clientHeight <= window.innerHeight)) {
        clearHeaderItems();
        headerItems[1].classList.add("active");
    }
    if (projectsTop <= 500 && (projectsTop + projects.querySelector('h1').clientHeight <= window.innerHeight)) {
        console.log(projectsTop)

        clearHeaderItems();
        headerItems[2].classList.add("active");
    }
    if (contactTop <= 600 && (contactTop + contact.querySelector('h1').clientHeight <= window.innerHeight)) {
        clearHeaderItems();
        headerItems[4].classList.add("active");
    }
});
