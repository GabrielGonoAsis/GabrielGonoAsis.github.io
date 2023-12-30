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
  spaceBetween: 5,
  grabCursor: true,
  centeredSlides: true,
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
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

//foes carousels
let swiperCards2 = new Swiper(".foes .card__content", {
  loop: true,
  spaceBetween: 20,
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
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 2,
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

  popupTitle.textContent = title;

  contentContainer.innerHTML = '';

  imageElement.src = imagePath;

  contentContainer.appendChild(imageElement);

  var textElement = document.createElement('p');
  textElement.textContent = content;
  contentContainer.appendChild(textElement);

  overlay.style.display = 'block';
  popup.style.display = 'block';

  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });

  gsap.fromTo(popup, { opacity: 0, scale: 0.1 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'fade.out', delay: 0.1 });
}

//hides popup
function closePopup() {
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');

  gsap.to([popup], { opacity: 0, scale: 0, duration: 0.5, ease: 'fade.in', onComplete: () => {
    popup.style.display = 'none';
  } });

  gsap.to([overlay], { opacity: 0, duration: 0.5, ease: 'fade.in', onComplete: () => {
    overlay.style.display = 'none';
  } });

}

//shows images
function showMoreImages() {
  let hiddenImages = document.querySelectorAll('.img-container.hidden');
  hiddenImages.forEach(function (image) {
    image.style.display = "inline";
  });
  
  document.getElementById("showMoreButton").style.display = "none";
  document.getElementById("showLessButton").style.display = "inline";
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


//GSAP animations
gsap.registerPlugin(ScrollTrigger)

//slogan animation
gsap.fromTo('.first-word', 
{opacity: 0, 
  y:-300
}, 
{opacity: 1, 
  y: 0, 
  duration: 2, 
  ease: "power2.inOut"  , 
  delay: 0 
});

gsap.fromTo('.second-word', 
{opacity: 0, 
  y:-300
}, 
{opacity: 1, 
  y: 0, 
  duration: 2, 
  ease: "power2.inOut", 
delay: 2 
});

//trailer video animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trailer",
    start: "20% 80%",
    end: "80% 50px",
    scrub: 2,
    markers: false,
    toggleActions: "play none none none",
  }
});

tl.to(".trailer",
{opacity: 1, 
  scale: 1,
  duration: 1, 
  ease: "power2.inOut", 
  delay: 0
})
.to(".trailer",
{opacity: 0, 
  scale: 0.8,
  duration: 1, 
  ease: "power2.inOut", 
  delay: 0
});

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
  duration: 1, 
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
  duration: 1, 
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
  duration: 1, 
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
  duration: 1, 
  ease: "power3.inOut", 
  delay: 0.3}
);

//key features section
const container = document.querySelector(".scroll_container");
const sections = gsap.utils.toArray(".section");

let scrollTween = gsap.to(sections, {
  xPercent: -142 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: "+=3000",
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
animateText(".anim3", 0, -200, 0, 1.2, "power2.inOut", 0);
animateText(".anim4", 0, 200, 0, 1.2, "power2.inOut", 0);


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