const timeHeading = document.getElementById("time");
const fontSelector = document.querySelectorAll("input[name='font']");

function applyFont(font){
    timeHeading.style.fontFamily = font;
}
function saveFont(font){
    localStorage.setItem("currentFont",font);
}
function loadFont(){
    const currentFont = localStorage.getItem("currentFont");
    if(currentFont){
        applyFont(currentFont);
        fontSelector.forEach(element => {
            if(element.value == currentFont){
                element.checked = true;
            }
        });
    }
}
fontSelector.forEach(element => {
    element.addEventListener('change', (event) => {
        const selectedFont = event.target.value;
        applyFont(selectedFont);
        saveFont(selectedFont);
    });
});
loadFont();
    