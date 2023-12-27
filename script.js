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


//horizontal scrolling
const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
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

//autoplay on scroll for key-features videos
function videoScroll() {

  if ( document.querySelectorAll('.scroll_contents video').length > 0) {
    var windowWidth = window.innerWidth,
        videoEl = document.querySelectorAll('.scroll_contents video');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoWidth = thisVideoEl.clientWidth,
          videoClientRect = thisVideoEl.getBoundingClientRect().left;

      if ( videoClientRect <= ( (windowWidth) - (videoWidth*.5) ) && videoClientRect >= ( 0 - ( videoWidth*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}

//carousels for characters

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


//popup for markers in map using gsap animations

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
















