let video = document.querySelector(".video") 
let hover_text = document.querySelector(".hover_text")

hover_text.addEventListener("mouseover", function (e) { 
    document.querySelector(".hover_text").style.visibility='hidden';
    video.play(); 
}) 

hover_text.addEventListener("mouseout", function (e) { 
    document.querySelector(".hover_text").style.visibility='visible';
    video.pause(); 
}) 