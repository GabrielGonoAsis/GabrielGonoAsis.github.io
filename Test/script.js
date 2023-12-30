const container = document.querySelector(".scroll_container");
const sections = gsap.utils.toArray(".section");

let scrollTween = gsap.to(sections, {
  xPercent: -142 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: "+=2000",
    markers: false,
  }
});

function animateText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue) {
  sections.forEach((section) => {
    let text = section.querySelectorAll(textSelector);
    
    if (text.length === 0) return;
    
    gsap.from(text, {
      y: yValue,
      x: xValue,
      opacity: opacityValue,
      duration: durationValue,
      ease: easeType,
      stagger: staggerValue,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: "left 85%",
        markers: false,
      },
    });
  });
}

animateText(".anim", -130, 0, 0, 1, "power3.inOut", 0.1);
animateText(".anim2", 130, 0, 0, 1, "power3.inOut", 0.1);
animateText(".anim3", 0, 400, 0, 1.2, "power2.inOut", 0);
animateText(".anim4", 0, -400, 0, 1.2, "power2.inOut", 0);
