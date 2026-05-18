document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.from("#mainTitle", {duration: 1, x: -800})
    .from("#seconderyTitle", {duration: 1, x: -800})
    .from("#discriptionTitle", {duration: 1, x: -800})
    gsap.registerPlugin(ScrollTrigger)

    

    const tlSkills = gsap.timeline({
        scrollTrigger: {
        trigger: "#skillSection",
        start: "top 95%", 
        end: "bottom 90%", 
        scrub: 1, 
        markers: true
    },
    });

tlSkills
    .from("#titleSkill", { scale: 0, opacity: 0, duration: 2, scrub: 2 })
    .from("[data-skill-card]", { 
            y: '100%',
            opacity: 0,
            stagger: 0.6,
            duration: 1, })

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

    gsap.from(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 90%",
            // markers: true,
            scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1,
    });

    // gsap.from(".footer__brand, .footer__contacts", {
    //     scrollTrigger: {
    //         trigger: ".footer",
    //         start: "top 85%",
    //         end: "top 60%",
    //         scrub: 0.3,
    //         markers: false,
    //     },
    //     y: 50,
    //     opacity: 0,
    //     stagger: 0.2,
    //     duration: 0.8,
    // });

    // gsap.from(".footer__item", {
    //     scrollTrigger: {
    //         trigger: ".footer",
    //         start: "top 85%",
    //         end: "top 60%",
    //         scrub: 0.3,
    //         markers: false,
    //     },
    //     x: 30,
    //     opacity: 0,
    //     stagger: 0.1,
    //     duration: 0.6,
    // });
    

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
    .from("#titleProjects", { scale: 0, opacity: 0, duration: 2, scrub: 2 })
    .from(".project-card", { 
            y: '100%',
            opacity: 0,
            stagger: 0.6,
            duration: 1, })
    
    

    

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
});