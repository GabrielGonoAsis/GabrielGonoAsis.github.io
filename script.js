//hover to play video
let video = document.querySelector(".video") 
document.querySelector(".video").style.transition = "0.3s ease";
let hover_text = document.querySelector(".hover_text")
document.querySelector(".hover_text p").style.transition = "0.3s ease";

hover_text.addEventListener("mouseenter", function (e) { 
    document.querySelector(".hover_text p").style.opacity='0';
    document.querySelector(".video") .style.filter='brightness(100%)';
    video.play(); 
}) 

hover_text.addEventListener("mouseleave", function (e) { 
    document.querySelector(".hover_text  p").style.opacity="100";
    document.querySelector(".video") .style.filter='brightness(10%)';
    video.pause(); 
}) 

//carousels for characters using swiper

//friends carousels
let swiperCards = new Swiper(".friends .card__content", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 45,
  effect: "coverflow",
  coverflowEffect:{
    rotate: 0,
    depth: 100,
  },

  pagination: {
    el: ".friends .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      nextEl: null,
      prevEl: null,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      nextEl: null,
      prevEl: null,
    },
    411: {
      slidesPerView: 2,
      spaceBetween: 15,
      nextEl: null,
      prevEl: null,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
      nextEl: null,
      prevEl: null,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 5,
      nextEl: null,
      prevEl: null,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 5,
      nextEl: null,
      prevEl: null,
    },
    1441: {
      slidesPerView: 3.5,
      spaceBetween: 5,
    },
  },
});

//foes carousels
let swiperCards2 = new Swiper(".foes .card__content", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 45,  
  grabCursor: true,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect:{
    rotate: 0,
    depth: 200,
  },

  pagination: {
    el: ".foes .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-foes",
    prevEl: ".swiper-button-prev-foes",
  },

  breakpoints:{
    320: {
      slidesPerView: 1.2,
      spaceBetween: 25,
      nextEl: null, 
      prevEl: null,
    },
    375: {
      slidesPerView: 1.35,
      spaceBetween: 25,
      nextEl: null,
      prevEl: null,
    },
    411: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      nextEl: null,
      prevEl: null,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 25,
      nextEl: null,
      prevEl: null,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 5,
      nextEl: null,
      prevEl: null,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 5,
      nextEl: null,
      prevEl: null,
    },
    1441: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
  },
});


//popup for markers in map using GSAP animations

//shows popup
function showPopup(title, content, imagePath) {
  var popupTitle = document.getElementById('popup-title');
  var contentContainer = document.getElementById('popup-content');
  var imageElement = document.createElement('img');
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  document.getElementById("header").style.opacity = '0';

  popupTitle.textContent = title;

  contentContainer.innerHTML = '';

  imageElement.src = imagePath;

  contentContainer.appendChild(imageElement);

  var textElement = document.createElement('p');
  textElement.textContent = content;
  contentContainer.appendChild(textElement);

  overlay.style.display = 'block';
  popup.style.display = 'block';

  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 1.2 });

  gsap.fromTo(popup, { opacity: 0, scale: 0.1 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.inOut', delay: 0.1 });
}

//hides popup
function closePopup() {
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');

  gsap.to([popup], { opacity: 0, scale: 0, duration: 1.2, ease: 'power2.inOut', onComplete: () => {
    popup.style.display = 'none';
  } });

  gsap.to([overlay], { opacity: 0, duration: 1.2, ease: 'power2.inOut', onComplete: () => {
    overlay.style.display = 'none';
  } });

}

//shows images
function showMoreImages() {
  let hiddenImages = document.querySelectorAll('.img-container.hidden');
  hiddenImages.forEach(function (image) {
    image.style.display = "inline";
  });
  
  const animation = gsap.fromTo(hiddenImages, {
    opacity: 0,
    y: -50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.3,
    delay: 0.5,
    ease: 'power2.out',
  }); 

  document.getElementById("showMoreButton").style.display = "none";
  document.getElementById("showLessButton").style.display = "inline";
  animation.restart();
}

//hides images
function hideImages() {
  let allImages = document.querySelectorAll('.img-container');
  allImages.forEach(function (image) {
      if (image.classList.contains('hidden')) {
          image.style.display = "none";
      }
  });

  document.getElementById("showMoreButton").style.display = "inline";
  document.getElementById("showLessButton").style.display = "none";
}

//hides images on screen size
var mediaQuery = window.matchMedia('(max-width: 412px)');

function handleMediaQuery(event) {
    var elementsToHide = document.querySelectorAll('.images > :nth-child(n+4):nth-child(-n+6)');
    elementsToHide.forEach(function (element) {
        if (event.matches) {
            element.classList.add('hidden');
        } else {
            element.classList.remove('hidden');
        }
    });
}

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQuery);

//GSAP animations
gsap.registerPlugin(ScrollTrigger)

//slogan animation
sloganTXT = new SplitType('.slogan', { types: 'words' });

gsap.from('.slogan .word:nth-child(1)',
{opacity: 0, 
  y: -200,
  duration: 2,
  ease: "power2.inOut", 
}
);

gsap.from('.slogan .word:nth-child(2)',
{opacity: 0, 
  y: -200,
  duration: 2,
  delay: 0.7,
  ease: "power2.inOut", 
}
);

gsap.from('.slogan .word:nth-child(3)',
{opacity: 0, 
  y: -200,
  duration: 2,
  delay: 2.5,
  ease: "power2.inOut", 
}
);

//trailer video animation
gsap.from(".trailer",
{opacity: 0, 
  scale: 0.8,
  duration: 1.5, 
  ease: "power3.inOut", 
  scrollTrigger: {
    trigger: ".trailer",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
  }
})

//overview section animation
gsap.fromTo(".header-overview", //header
{opacity: 0, 
  x: -400,
},
{ scrollTrigger: {
  trigger: ".overview",
  start: "30% 80%",
  end: "90% center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  x: 0,
  duration: 1.8, 
  ease: "power3.inOut", 
  delay: 0}
);

gsap.fromTo(".overview-hr", //horizontal line
{opacity: 0, 
  x: -400,
},
{ scrollTrigger: {
  trigger: ".overview",
  start: "30% 80%",
  end: "90% center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  x: 0,
  duration: 1.8, 
  ease: "power3.inOut", 
  delay: 0.3}
);

gsap.fromTo(".p-overview1", //paragraph
{opacity: 0, 
  y: -50,
},
{ scrollTrigger: {
  trigger: ".overview",
  start: "30% 80%",
  end: "90% center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  y: 0,
  duration: 1.8, 
  ease: "power3.inOut", 
  delay: 0}
);

gsap.fromTo(".p-overview2", //paragraph
{opacity: 0, 
  y: -50,
},
{ scrollTrigger: {
  trigger: ".overview",
  start: "30% 80%",
  end: "90% center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  y: 0,
  duration: 1.8, 
  ease: "power3.inOut", 
  delay: 0.3}
);

//key features section animation

//horizontal scrolling
ScrollTrigger.matchMedia({
  "(min-width: 1441px)": function() {
    
    const container = document.querySelector(".scroll_container");
    const sections = gsap.utils.toArray(".section");
  
      let scrollTween = gsap.to(sections, {
        xPercent: -144* (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=3000",
          markers: false,
        }
      });
      
    function animateText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
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
          scale: scaleValue,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 85%",
            markers: false,
          },
        });
      });
    }
  
    animateText(".anim", -130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim2", 130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim3", 0, -200, 0, 1.2, "power2.inOut", 0), 1;
    animateText(".anim4", 0, 200, 0, 1.2, "power2.inOut", 0, 1);
    animateText(".anim5", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.6);
    
  },

  "(max-width: 1441px)": function() {
    
    const container = document.querySelector(".scroll_container");
    const sections = gsap.utils.toArray(".section");
  
      let scrollTween = gsap.to(sections, {
        xPercent: -136 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=3000",
          markers: false,
        }
      });
      
    function animateText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
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
          scale: scaleValue,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 85%",
            markers: false,
          },
        });
      });
    }
  
    animateText(".anim", -130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim2", 130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim3", 0, -200, 0, 1.2, "power2.inOut", 0), 1;
    animateText(".anim4", 0, 200, 0, 1.2, "power2.inOut", 0, 1);
    animateText(".anim5", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.6);
    
  },

  "(max-width: 1025px)": function() {
    
  const container = document.querySelector(".scroll_container");
  const sections = gsap.utils.toArray(".section");

    let scrollTween = gsap.to(sections, {
      xPercent: -144 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: false,
      }
    });
    
  function animateText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
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
        scale: scaleValue,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left 85%",
          markers: false,
        },
      });
    });
  }

  animateText(".anim", -130, 0, 0, 1, "power3.inOut", 0.1, 1);
  animateText(".anim2", 130, 0, 0, 1, "power3.inOut", 0.1, 1);
  animateText(".anim3", 0, -200, 0, 1.2, "power2.inOut", 0), 1;
  animateText(".anim4", 0, 200, 0, 1.2, "power2.inOut", 0, 1);
  animateText(".anim5", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.6);
  
  },

  "(max-width: 1024px)": function() {
    
    const container = document.querySelector(".scroll_container");
    const sections = gsap.utils.toArray(".section");
  
      let scrollTween = gsap.to(sections, {
        xPercent: -153 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=3000",
          markers: false,
        }
      });
      
    function animateText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
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
          scale: scaleValue,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 85%",
            markers: false,
          },
        });
      });
    }
  
    animateText(".anim", -130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim2", 130, 0, 0, 1, "power3.inOut", 0.1, 1);
    animateText(".anim3", 0, -200, 0, 1.2, "power2.inOut", 0), 1;
    animateText(".anim4", 0, 200, 0, 1.2, "power2.inOut", 0, 1);
    animateText(".anim5", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.6);
    
  },

  "(min-width: 769px)": function() {
    gsap.fromTo(".standard-container", //standard edition game
    {opacity: 0, 
    xPercent: -15,
    },
    { scrollTrigger: {
    trigger: ".standard-container",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    opacity: 1, 
    xPercent: 0,
    duration: 1.5, 
    ease: "power3.inOut", 
    delay: 0}
    );

    gsap.fromTo(".deluxe-container", //deluxe edition game
    {opacity: 0, 
    xPercent: 15,
    },
    { scrollTrigger: {
    trigger: ".deluxe-container",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    opacity: 1, 
    xPercent: 0,
    duration: 1.5, 
    ease: "power3.inOut", 
    delay: 0}
    );  
  },

  "(max-width: 769px)": function() {
    gsap.fromTo(".standard-container", //standard edition game
    {opacity: 0, 
    xPercent: -40,
    },
    { scrollTrigger: {
    trigger: ".standard-container",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    opacity: 1, 
    xPercent: 0,
    duration: 1.5, 
    ease: "power3.inOut", 
    delay: 0}
    );

    gsap.fromTo(".deluxe-container", //deluxe edition game
    {opacity: 0, 
    xPercent: -40,
    },
    { scrollTrigger: {
    trigger: ".deluxe-container",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    opacity: 1, 
    xPercent: 0,
    duration: 1.5, 
    ease: "power3.inOut", 
    delay: 0}
    );  
  },

  "(min-width: 412px)": function() {
    gsap.fromTo(".old-container", //spider-man 1
    {opacity: 0, 
      xPercent: -9,
    },
    { scrollTrigger: {
      trigger: ".games-old",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 0}
    );

    gsap.fromTo(".miles-container", //spider-man miles morales
    {opacity: 0, 
      xPercent: 9,
    },
    { scrollTrigger: {
      trigger: ".games-old",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 0}
    );
    
    //about us    
    gsap.fromTo(".about-img-left", 
    {opacity: 0, 
      xPercent: -10,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 1.8}
    );

    gsap.fromTo(".about-img-right", 
    {opacity: 0, 
      xPercent: 10,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 1.8}
    );

    gsap.fromTo(".about-desc", 
    {opacity: 0, 
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 2}
    );

    //our vision
    gsap.fromTo(".vision-title", 
    {opacity: 0, 
      xPercent: 10,
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0}
    );

    gsap.fromTo(".vision-hr", 
    {opacity: 0, 
      xPercent: 10,
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.3}
    );

    gsap.fromTo(".vision-subhead", 
    {opacity: 0, 
      xPercent: 10,
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.5}
    );

    gsap.fromTo(".vision-desc", 
    {opacity: 0, 
      xPercent: 10,
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.7}
    );

    let vision_img = gsap.timeline({
      scrollTrigger: {
        trigger: ".visions",
        start: "10% center",
        end: "bottom center",
        markers: false,
        toggleActions: "play none none none",
      }
    });

    vision_img.to(".vision-img-anim",
    {opacity: 0, 
      xPercent: -100,
    });

    vision_img.to(".vision-img-anim",
    {opacity: 1, 
      xPercent: 0,
      stagger: 0.2,
      duration: 1,
    });
  },

  "(max-width: 412px)": function() {
    gsap.fromTo(".old-container", //spider-man 1
    {opacity: 0, 
      xPercent: 12,
    },
    { scrollTrigger: {
      trigger: ".old-container",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 0}
    );

    gsap.fromTo(".miles-container", //spider-man miles morales
    {opacity: 0, 
      xPercent: 12,
    },
    { scrollTrigger: {
      trigger: ".miles-container",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      ease: "power3.inOut", 
      delay: 0}
    );

    //about us
    gsap.fromTo(".about-txt-left", 
    {opacity: 0, 
      xPercent: -5,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      stagger: 0.3,
      ease: "power3.inOut", 
      delay: 2.5}
    );

    gsap.fromTo(".about-txt-right", 
    {opacity: 0, 
      xPercent: 5,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      stagger: 0.3,
      ease: "power3.inOut", 
      delay: 2.5}
      );

    gsap.fromTo(".about-img-left", 
    {opacity: 0, 
      xPercent: -5,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      stagger: 0.3,
      ease: "power3.inOut", 
      delay: 1.8}
    );

    gsap.fromTo(".about-img-right", 
    {opacity: 0, 
      xPercent: 5,
    },
    { scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      duration: 1.5, 
      stagger: 0.3,
      ease: "power3.inOut", 
      delay: 1.8}
    );

    //our vision
    gsap.fromTo(".vision-title", 
    {opacity: 0, 
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0}
    );

    gsap.fromTo(".vision-hr", 
    {opacity: 0, 
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.3}
    );

    gsap.fromTo(".vision-subhead", 
    {opacity: 0, 
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.5}
    );

    gsap.fromTo(".vision-desc", 
    {opacity: 0, 
    },
    { scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      duration: 1, 
      ease: "power3.inOut", 
      delay: 0.7}
    );

    gsap.fromTo(".vision-img-left",
    {opacity: 0, 
      xPercent: -15,
    },
    {scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
      opacity: 1, 
      xPercent: 0,
      stagger: 0.4,
      duration: 1.3,
    });

    gsap.fromTo(".vision-img-right",
    {opacity: 0, 
      xPercent: 15,
    },
    {scrollTrigger: {
      trigger: ".visions",
      start: "10% center",
      end: "bottom center",
      markers: false,
      toggleActions: "play none none none",
    },
    opacity: 1, 
      xPercent: 0,
      stagger: 0.4,
      duration: 1.3,
    });
    
  },

  "(min-width: 376px)": function() {
    //map animation
    gsap.to(".map-container .desc", //map image
    {opacity: "40%", 
    duration: 1,
    delay: 1.4,
    ease: "power2.inOut", 
    scrollTrigger: {
    trigger: ".map-container",
    start: "20% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    });

    let map_anim = gsap.timeline({
    scrollTrigger: {
    trigger: ".map-container",
    start: "20% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    });

    map_anim.to(".map-img", //map image
    {opacity: 1, 
    duration: 2,
    ease: "power2.inOut", 
    });

    //map pin animations
    map_anim.to("#pin-right",
    {opacity: 0, 
    xPercent: 200,
    });

    map_anim.to("#pin-left",
    {opacity: 0, 
    xPercent: -200,
    });

    map_anim.to("#pin-right",
    {opacity: 1, 
    xPercent: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: "power4.inOut", 
    });

    map_anim.to("#pin-left",
    {opacity: 1, 
    xPercent: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.inOut", 
    });

    //side text animation
    map_anim.to(".side-title",
    {opacity: 0, 
    y: -200,
    ease: "power4.inOut", 
    });

    map_anim.to(".side-title",
    {opacity: 1, 
    y: 0,
    duration: 1.5,
    ease: "power4.inOut", 
    });
  },

  "(max-width: 376px)": function() {
    gsap.to(".map-container .desc", //map image
    {opacity: "40%", 
    duration: 1,
    delay: 1.4,
    ease: "power2.inOut", 
    scrollTrigger: {
    trigger: ".map-container",
    start: "20% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    });

    let map_anim = gsap.timeline({
    scrollTrigger: {
    trigger: ".map-container",
    start: "20% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
    },
    });

    map_anim.to(".map-img", //map image
    {opacity: 1, 
    duration: 2,
    ease: "power2.inOut", 
    });

    //map pin animations
    map_anim.to("#pin-right",
    {opacity: 0, 
    xPercent: -200,
    });

    map_anim.to("#pin-left",
    {opacity: 0, 
    xPercent: -200,
    });

    map_anim.to("#pin-right",
    {opacity: 1, 
    xPercent: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: "power4.inOut", 
    });

    map_anim.to("#pin-left",
    {opacity: 1, 
    xPercent: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.inOut", 
    });

    //side text animation
    map_anim.to(".top-title",
    {opacity: 0, 
    y: -50,
    ease: "power4.inOut", 
    });

    map_anim.to(".top-title",
    {opacity: 1, 
    y: 0,
    duration: 1.5,
    ease: "power4.inOut", 
    });
  },
});

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

//autoplay on scroll for key-features videos
function videoScroll() {

  if ( document.querySelectorAll('.features-vid video').length > 0) {
    var windowWidth = window.innerWidth,
        videoEl = document.querySelectorAll('.features-vid video');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoWidth = thisVideoEl.clientWidth,
          videoClientRect = thisVideoEl.getBoundingClientRect().left;

      if ( videoClientRect <= ( (windowWidth) - (videoWidth*.9) ) && videoClientRect >= ( 0 - ( videoWidth*.3 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}

//autoplay on scroll for key-features videos
window.addEventListener('load', videoScroll2);
window.addEventListener('scroll', videoScroll2);

function videoScroll2() {

  if ( document.querySelectorAll('.vert-vid video').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('.vert-vid video');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.6) ) && videoClientRect >= ( 0 - ( videoHeight*.6 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}

//removes navigation bar when in key-features section
document.addEventListener("DOMContentLoaded", function () {
  const keyFeaturesSection = document.getElementById('key-features');
  const header = document.getElementById('header');

  function isOverKeyFeatures() {
      const keyFeaturesTop = keyFeaturesSection.offsetTop;
      const keyFeaturesBottom = keyFeaturesTop + keyFeaturesSection.offsetHeight;
      const scrollY = window.scrollY;
      return scrollY >= keyFeaturesTop && scrollY <= keyFeaturesBottom;
  }

  function handleScroll() {
      if (isOverKeyFeatures()) {
          document.getElementById("header").style.opacity = '0';
      } else {
          document.getElementById("header").style.opacity = '100';
      }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();

  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = "0";
  } else {
    document.getElementById('header').style.top = "-60px";
  }
    prevScrollpos = currentScrollPos;
  }
});

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

//vertical key features
ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    const section_vert = gsap.utils.toArray(".section-vert");

    function animateVerticalText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
  section_vert.forEach((section_vert) => {
    let text = section_vert.querySelectorAll(textSelector);
    
    if (text.length === 0) return;
    
    gsap.from(text, {
      y: yValue,
      xPercent: xValue,
      opacity: opacityValue,
      duration: durationValue,
      ease: easeType,
      stagger: staggerValue,
      scale: scaleValue,
      scrollTrigger: {
        trigger: section_vert,
        start: "10% center",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  });
    }

    featureTitleTXT = new SplitType('.vert-title', { types: 'words' });

    animateVerticalText(".vert-title .word", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.8);
    animateVerticalText(".anim-right", 0, -12, 0, 1.2, "power2.inOut", 0.3, 1);
    animateVerticalText(".anim-left", 0, 12, 0, 1.2, "power2.inOut", 0.3, 1);
  },

  "(max-width: 767px)": function() {
    const section_vert = gsap.utils.toArray(".section-vert");

    function animateVerticalText(textSelector, yValue, xValue, opacityValue, durationValue, easeType, staggerValue, scaleValue) {
    section_vert.forEach((section_vert) => {
    let text = section_vert.querySelectorAll(textSelector);
    
    if (text.length === 0) return;
    
    gsap.from(text, {
      y: yValue,
      xPercent: xValue,
      opacity: opacityValue,
      duration: durationValue,
      ease: easeType,
      stagger: staggerValue,
      scale: scaleValue,
      scrollTrigger: {
        trigger: section_vert,
        start: "-10% center",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  });
    }

    featureTitleTXT = new SplitType('.vert-title', { types: 'words' });

    animateVerticalText(".vert-title .word", 0, 0, 0, 1.2, "power2.inOut", 0.3, 0.8);
    animateVerticalText(".anim-right", 0, -12, 0, 1.2, "power2.inOut", 0.3, 1);
    animateVerticalText(".anim-left", 0, 12, 0, 1.2, "power2.inOut", 0.3, 1);
  }
});

//characters section animation
gsap.from(".characters .title-anim", //title and description
{opacity: 0, 
  y: -50,
  scale: 0.9,
  duration: 1,
  ease: "power1.inOut", 
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".characters .title",
    start: "30% 80%",
    end: "90% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

//friends slider animation
gsap.from(".friends-title", //slider title
{opacity: 0, 
  duration: 1,
  ease: "power4.inOut", 
  scrollTrigger: {
    trigger: ".friends-title",
    start: "100% 100%",
    end: "90% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

let friends_anim = gsap.timeline({
  scrollTrigger: {
    trigger: "#friend-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

//slider animation
friends_anim.to("#friend-card-article", 
{opacity: 0, 
  xPercent: -10,
});

friends_anim.to("#friend-card-article",
{opacity: 100, 
  xPercent: 0,
  ease: "power2.inOut", 
  duration: 1,
  stagger: 0.1,
});

gsap.to("#friend-nav", //navigation animation
{opacity: 100, 
  ease: "power2.inOut",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#friend-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

gsap.to("#friend-pag", //pagination animation
{opacity: 100, 
  ease: "power2.inOut",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#friend-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});


//foes slider animation
gsap.from(".foes-title", //slider title
{opacity: 0, 
  duration: 1,
  ease: "power4.inOut", 
  scrollTrigger: {
    trigger: ".foes-title",
    start: "100% 100%",
    end: "90% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

let foes_anim = gsap.timeline({
  scrollTrigger: {
    trigger: "#foes-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

//slider animation
foes_anim.to("#foes-card-article",
{opacity: 0, 
  xPercent: 10,
});

foes_anim.to("#foes-card-article",
{opacity: 100, 
  xPercent: 0,
  ease: "power2.inOut", 
  duration: 1,
  stagger: 0.05,
});

gsap.to("#foes-nav", //navigation animation
{opacity: 100, 
  ease: "power2.inOut",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#foes-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

gsap.to("#foes-pag", //pagination animation
{opacity: 100, 
  ease: "power2.inOut",
  duration: 1,
  delay:1,
  scrollTrigger: {
    trigger: "#foes-swiper-wrapper",
    start: "top center",
    end: "15% center",
    markers: false,
    toggleActions: "play none none none",
  },
});

//gallery animations
let gallery_anim = gsap.timeline({
  scrollTrigger: {
    trigger: ".images",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
  },
});

gallery_anim.to(".img-container",
{opacity: 0, 
  y: -50,
});

gallery_anim.to(".img-container",
{opacity: 1, 
  y: 0,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.inOut", 
});



//developers animations

//about animations
gsap.fromTo(".about-title", 
{opacity: 0, 
  xPercent: -100,
},
{ scrollTrigger: {
  trigger: ".about",
  start: "top center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  scale: 1,
  duration: 1.5, 
  ease: "power3.inOut", 
  delay: 0}
);

gsap.fromTo(".about-hr", 
{opacity: 0, 
  xPercent: -100,
},
{ scrollTrigger: {
  trigger: ".about",
  start: "top center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  scale: 1,
  duration: 1.5, 
  ease: "power3.inOut", 
  delay: 0.5}
);

gsap.fromTo(".inso-logo", 
{opacity: 0, 
  y: 100,
  scale: 0.8,
},
{ scrollTrigger: {
  trigger: ".about",
  start: "top center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  y: 0,
  scale: 1,
  duration: 1.5, 
  ease: "power3.inOut", 
  delay: 0.8}
);

//mission animations
gsap.fromTo(".mission-title", 
{opacity: 0, 
  xPercent: 10,
},
{ scrollTrigger: {
  trigger: ".missions",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  duration: 1.3, 
  ease: "power3.inOut", 
  delay: 0}
);

gsap.fromTo(".mission-hr", 
{opacity: 0, 
  xPercent: 10,
},
{ scrollTrigger: {
  trigger: ".missions",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  duration: 1.3, 
  ease: "power3.inOut", 
  delay: 0.3}
);

let mission_left = gsap.timeline({
  scrollTrigger: {
    trigger: ".missions",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
  }
});

mission_left.to(".img-txt-left",
{opacity: 0, 
  xPercent: -10,
});

mission_left.to(".img-txt-left",
{opacity: 1, 
  xPercent: 0,
  stagger: 0.2,
  duration: 1,
});

let mission_right = gsap.timeline({
  scrollTrigger: {
    trigger: ".missions",
    start: "10% center",
    end: "bottom center",
    markers: false,
    toggleActions: "play none none none",
  }
});

mission_right.to(".img-txt-right",
{opacity: 0, 
  xPercent: 10,
});

mission_right.to(".img-txt-right",
{opacity: 1, 
  xPercent: 0,
  stagger: 0.2,
  duration: 1,
});

//meet our team

//directors image and text
teamTXT = new SplitType('.team-title', { types: 'words' });

gsap.from('.team-title .word',
{opacity: 0, 
  y: -80,
  duration: 1.2,
  stagger: 0.2,
  scrollTrigger: {
  trigger: ".team-title",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);

gsap.from('.team-subhead',
{opacity: 0, 
  duration: 2,
  scrollTrigger: {
  trigger: ".team-subhead",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);

gsap.from('.direc-content-right',
{opacity: 0, 
  yPercent: 50,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
  trigger: ".directors-img",
  start: "5% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);

gsap.from('.direc-content-left',
{opacity: 0, 
  yPercent: 50,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
  trigger: ".directors-img",
  start: "5% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);

gsap.from('.list-left',
{opacity: 0, 
  xPercent: -10,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
  trigger: ".other-team",
  start: "5% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);

gsap.from('.list-right',
{opacity: 0, 
  xPercent: 10,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
  trigger: ".other-team",
  start: "5% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
}}
);
//previous work
gsap.fromTo(".prev-title", 
{opacity: 0, 
  xPercent: -150,
},
{ scrollTrigger: {
  trigger: ".prev-work",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  duration: 1.3, 
  ease: "power3.inOut", 
  delay: 0}
);

gsap.fromTo(".prev-hr", 
{opacity: 0, 
  xPercent: -150,
},
{ scrollTrigger: {
  trigger: ".prev-work",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  xPercent: 0,
  duration: 1.3, 
  ease: "power3.inOut", 
  delay: 0.3}
);

gsap.fromTo(".prev-img", 
{opacity: 0, 
  scale: 0.8,
},
{ scrollTrigger: {
  trigger: ".prev-work",
  start: "10% center",
  end: "bottom center",
  markers: false,
  toggleActions: "play none none none",
},
  opacity: 1, 
  scale: 1,
  duration: 1.3, 
  ease: "power3.inOut", 
  delay: 0.5}
);