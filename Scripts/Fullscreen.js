const fullScreenBut = document.getElementById("fullscreen");
fullScreenBut.addEventListener("click",function(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
})
