document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    const tl = gsap.timeline();
    tl.from("#mainTitle", {duration: 1, x: -800})
    .from("#seconderyTitle", {duration: 1, x: -800})
    .from("#discriptionTitle", {duration: 1, x: -800});

    const tlSkills = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillSection",
            start: "top 95%", 
            end: "bottom 90%", 
            scrub: 1, 
            // markers: true
        },
    });

    tlSkills
        .from("#titleSkill", { scale: 0, opacity: 0, duration: 2 }) 
        .from("[data-skill-card]", { 
            y: '100%',
            opacity: 0,
            stagger: 0.6,
            duration: 1
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

    gsap.from(".header .logo", {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        ease: "back.out(0.8)",
        delay: 0.3,
    });

    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: "#aboutmeSection",
            start: "top 85%",
            end: "bottom 80%",
            scrub: 1,
            // markers: true
        }
    });

    tlAbout
        .from("#aboutmeSection", { opacity: 0, duration: 1 })
        .from(".about-me__text", {
            y: 50,
            opacity: 0,
            duration: 1
        }, "-=0.5")
        .from(".context-picture__item--bottom", {
            x: -100,
            opacity: 0,
            duration: 0.8
        }, "-=0.4")
        .from(".context-picture__item--top", {
            x: 100,
            opacity: 0,
            duration: 0.8
        }, "-=0.6");

    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 90%",
            // markers: true,
            scrub: 1
        }
    });

    footerTimeline.from(".footer", {
        y: 100,
        opacity: 0,
        duration: 1 
    });
    footerTimeline.from(".footer__brand, .footer__contacts", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
    });

    footerTimeline.from(".footer__item", {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
    });

    const tlProjects = gsap.timeline({
        scrollTrigger: {
            trigger: "#projectsSection",
            start: "top 95%", 
            end: "bottom 90%", 
            scrub: 1, 
            // markers: true
        },
    });

    tlProjects
        .from("#titleProjects", { scale: 0, opacity: 0, duration: 2 })
        .from(".project-card", { 
            y: '100%',
            opacity: 0,
            stagger: 0.6,
            duration: 1
        });

    gsap.from(".slider", {
        scrollTrigger: {
            trigger: ".slider",
            start: "top 85%",
            end: "top 60%",
            scrub: 0.3,
            markers: false,
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
    });

    const split = SplitText.create(".about-me__text", {
        type: "chars",
        mask: 'chars'
    });

    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: "#aboutmeSection",
            start: "top 60%", 
            end: "bottom 90%", 
            scrub: 1, 
            // markers: true,
            duration: 5
        },
        duration: 1, 
        x: 100,       
        autoAlpha: 0, 
        stagger: 0.05 
    });
});