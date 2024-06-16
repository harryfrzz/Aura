const dateHeading = document.getElementById("date");
const dateSelector = document.querySelectorAll("input[name='dtype']");
const dateObject = document.getElementById("date");
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const month = d.getMonth();

const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let monthWords = monthArray[month];
let dayWords = dayArray[day];
let dateFormat = `${dayWords}, ${monthWords} ${date}`;

setInterval(changeTime,1000);
function changeTime(){
    const d = new Date();
    const timeObject = document.getElementById("time");
    let hour = d.getHours();
    let minutes = d.getMinutes();
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeObject.textContent = `${hour}:${minutes}`;
    if(hour == 0){
        textDate();
    }
}

function textDate() {
    let day = d.getDay();
    let dateText;
    switch(day) {
        case 0:
            dateText = "It's Sunday";
            dateObject.textContent = dateText;
            break;
        case 1:
            dateText = "It's Monday";
            dateObject.textContent = dateText;
            break;
        case 2:
            dateText = "It's Tuesday";
            dateObject.textContent = dateText;
            break;
        case 3:
            dateText = "It's Wednesday";
            dateObject.textContent = dateText;
            break;
        case 4:
            dateText = "It's Thursday";
            dateObject.textContent = dateText;
            break;
        case 5:
            dateText = "It's Friday";
            dateObject.textContent = dateText;
            break;
        case 6:
            dateText = "It's Saturday";
            dateObject.textContent = dateText;
            break;
    }
    return dateText;
}

function updateDateDisplay() {
    const selectedFormat = document.querySelector("input[name='dtype']:checked").value;
    if (selectedFormat === "formatted") {
        dateHeading.textContent = dateFormat;
    } else if (selectedFormat === "text") {
        dateHeading.textContent = textDate();
    }
    // Store the selected format in local storage
    localStorage.setItem("selectedDateFormat", selectedFormat);
}

// Add event listeners to radio buttons
dateSelector.forEach(radio => {
    radio.addEventListener("change", updateDateDisplay);
});

// Load the saved format from local storage
window.addEventListener("load", () => {
    const savedFormat = localStorage.getItem("selectedDateFormat");
    if (savedFormat) {
        document.querySelector(`input[name='dtype'][value='${savedFormat}']`).checked = true;
    }
    updateDateDisplay();
});

function greetingMessage(){
    const d = new Date();
    let hour = d.getHours();
    const greetingMessage = document.getElementById("greetingMessage");
    if(hour < 12){
        greetingMessage.textContent = "Good morning!";
    }else{
        greetingMessage.textContent = "Good evening!";
    }

}
greetingMessage();
changeTime();