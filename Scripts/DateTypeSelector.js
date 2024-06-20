//Variables
var time;
var timeStore;
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const month = d.getMonth();
const dateHeading = document.getElementById("date");
const timeplaceholder = document.getElementById("time");
const dateSelector = document.querySelectorAll("input[name='dtype']");
const timeSelector = document.querySelectorAll("input[name='ttype']");

//Month and Day Array
const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//Date in Normal format
let monthWords = monthArray[month];
let dayWords = dayArray[day];
let dateFormat = `${dayWords}, ${monthWords} ${date}`;

//24-Hour Clock Format
function twentyFourHour(){
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

//12-hour Clock Format
function twelveHour(){
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if(hour == 0){
        time =  `12:${minutes} AM`;
    }else if(hour == 12){
        time =  `12:${minutes} PM`;
    }else if(hour < 12){
        time = `${hour}:${minutes} AM`;
    }else {
        var t_hour = hour % 12;
        if(t_hour < 10){
            time = "0"+`${t_hour}:${minutes} PM`;
        }else{
            time =`${t_hour}:${minutes} PM`;
        }
    }
    return time;
}

//Date in Text Format
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

//Function to update the time format
function updateTimeFormat(){
    const selectedTimeFormat = document.querySelector("input[name='ttype']:checked").value;
    if(selectedTimeFormat === "24hr"){
        timeStore = twentyFourHour();
    }else if(selectedTimeFormat === "12hr"){
        timeStore = twelveHour();
    }
    timeplaceholder.textContent = timeStore;
    localStorage.setItem("selectedTimeFormat", selectedTimeFormat);
}
setInterval(updateTimeFormat, 1000);


//Radio button Selector for Time Format
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


//Function to update the Date format
function updateDateDisplay() {
    const selectedFormat = document.querySelector("input[name='dtype']:checked").value;
    if (selectedFormat === "formatted") {
        dateHeading.textContent = dateFormat;
    } else if (selectedFormat === "text") {
        dateHeading.textContent = textDate();
    }
    localStorage.setItem("selectedDateFormat", selectedFormat);
}

//Radio Button selector for Date Format
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

//Function to Show the greeting message
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
twentyFourHour();

