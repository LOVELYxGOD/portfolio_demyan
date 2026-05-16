document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("[data-skill-card]", {
        scrollTrigger: {
            trigger: "#skiilSection",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.5,
            markers: false,
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
    });

    gsap.from(".header", {
        duration: 0.8,
        y: -100,
        opacity: 0,
        ease: "back.out(0.5)",
        delay: 0.2,
    });

    gsap.from(".menu__item", {
        duration: 0.6,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".logo", {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        ease: "back.out(0.8)",
        delay: 0.3,
    });

    gsap.from(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 70%",
            scrub: 0.5,
            markers: false,
        },
        y: 100,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".footer__brand, .footer__contacts", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 85%",
            end: "top 60%",
            scrub: 0.3,
            markers: false,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
    });

    gsap.from(".footer__item", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 85%",
            end: "top 60%",
            scrub: 0.3,
            markers: false,
        },
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
    });
});