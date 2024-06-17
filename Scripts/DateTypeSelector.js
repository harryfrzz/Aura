const dateHeading = document.getElementById("date");
const timeplaceholder = document.getElementById("time");
const dateSelector = document.querySelectorAll("input[name='dtype']");
const timeSelector = document.querySelectorAll("input[name='ttype']");
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
    var timeObject;
    let hour = d.getHours();
    let minutes = d.getMinutes();
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeObject = `${hour}:${minutes}`;
    if(hour == 0){
        textDate();
    }
    return timeObject;
}


function twelveHour(){
    var time;
    const d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    hour = hour % 12;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if(hour < 12){
        time = `${hour}:${minutes} AM`;
    }else if(hour > 12){
        time = `${hour}:${minutes} PM`;
    }
    
    return time;
}

function textDate() {
    let day = d.getDay();
    let dateText;
    switch(day) {
        case 0:
            dateText = "It's Sunday";
            break;
        case 1:
            dateText = "It's Monday";

            break;
        case 2:
            dateText = "It's Tuesday";
            break;
        case 3:
            dateText = "It's Wednesday";
            break;
        case 4:
            dateText = "It's Thursday";
            break;
        case 5:
            dateText = "It's Friday";
            break;
        case 6:
            dateText = "It's Saturday";
            break;
    }
    return dateText;
}

function updateTimeFormat(){
    const selectedTimeFormat = document.querySelector("input[name='ttype']:checked").value;
    if(selectedTimeFormat === "24hr"){
        timeplaceholder.textContent = changeTime();
    }else if(selectedTimeFormat === "12hr"){
        timeplaceholder.textContent = twelveHour();
    }
    localStorage.setItem("selectedTimeFormat", selectedTimeFormat);
}
timeSelector.forEach(radio => {
    radio.addEventListener("change", updateTimeFormat);
});
window.addEventListener("load", () => {
    const savedTimeFormat = localStorage.getItem("selectedTimeFormat");
    if (savedTimeFormat) {
        document.querySelector(`input[name='ttype'][value='${savedTimeFormat}']`).checked = true;
    }
    updateTimeFormat();
});


function updateDateDisplay() {
    const selectedFormat = document.querySelector("input[name='dtype']:checked").value;
    if (selectedFormat === "formatted") {
        dateHeading.textContent = dateFormat;
    } else if (selectedFormat === "text") {
        dateHeading.textContent = textDate();
    }
    localStorage.setItem("selectedDateFormat", selectedFormat);
}
dateSelector.forEach(radio => {
    radio.addEventListener("change", updateDateDisplay);
});
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
timeplaceholder.textContent = changeTime();