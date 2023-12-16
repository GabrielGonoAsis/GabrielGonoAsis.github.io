let video = document.querySelector(".video") 
let hover_text = document.querySelector(".hover_text")

hover_text.addEventListener("mouseenter", function (e) { 
    document.querySelector(".hover_text p").style.visibility='hidden';
    video.play(); 
}) 

hover_text.addEventListener("mouseleave", function (e) { 
    document.querySelector(".hover_text  p").style.visibility='visible';
    video.pause(); 
}) 