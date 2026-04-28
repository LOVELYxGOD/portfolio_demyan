

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
// let tl = gsap.timeline({
//   // yes, we can add it to an entire timeline!
// });
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
})
