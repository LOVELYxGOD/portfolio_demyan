document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline();
    tl.from("#mainTitle", {duration: 1, x: -800})
    .from("#seconderyTitle", {duration: 1, x: -800})
    .from("#discriptionTitle", {duration: 1, x: -800})
});