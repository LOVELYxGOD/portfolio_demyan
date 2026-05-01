document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline();
    tl.from("#mainTitle", {duration: 1, x: -800})
    .from("#seconderyTitle", {duration: 1, x: -800})
    .from("#discriptionTitle", {duration: 1, x: -800})
    gsap.registerPlugin(ScrollTrigger)

    gsap.from("[data-skill-card]", {
        scrollTrigger: {
            trigger: "#skillSection",
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.5,
            markers: true
        },
            y: '100%',
            opacity: 0,
            stagger: 0.6,
            // duration: 1,
    });
});