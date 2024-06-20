//Code for showing the html in fullscreen (Reference: MDN)
const fullScreenBut = document.getElementById("fullscreen");
fullScreenBut.addEventListener("click",function(){
    if (!document.fullscreenElement) {
        document.getElementById("main").requestFullscreen();
    } else if (document.exitFullscreen) { 
        document.exitFullscreen();
    }
})
