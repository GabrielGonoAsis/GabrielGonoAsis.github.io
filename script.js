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
          document.getElementById("header").style.top = '-60px';
      } else {
          document.getElementById("header").style.top = '0';
      }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
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
