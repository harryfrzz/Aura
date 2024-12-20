//Variables
var time;
var timeStore;
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const month = d.getMonth();
const dateHeading = document.getElementById("date");
const dtplacement = document.getElementById("info")
const timeplaceholder = document.getElementById("time");
const dateSelector = document.querySelectorAll("input[name='dtype']");
const timeSelector = document.querySelectorAll("input[name='ttype']");
const placementSelector = document.querySelectorAll("input[name='ptype']");

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

//Radio Button selector for Date & Time placement Format
placementSelector.forEach(radio => {
    radio.addEventListener("change", changePlacement);
});
function changePlacement(){
    const selectedFormat = document.querySelector("input[name='ptype']:checked").value;
    const selectedTimeFormat = document.querySelector("input[name='ttype']:checked").value;
    if(selectedFormat == "center"){
        dtplacement.style.display = "block";
        dtplacement.style.top = "50%";
        dtplacement.style.textAlign = "center";
        dtplacement.style.left = "50%";
        dtplacement.style.marginLeft = "0"; 
    } else if (selectedFormat == "start") {
        dtplacement.style.display = "block";
        dtplacement.style.top = "50%";
        dtplacement.style.textAlign = "start";
        dtplacement.style.left = "10%";
        dtplacement.style.marginLeft = "100px";
        if (selectedTimeFormat === "24hr"){
            dtplacement.style.marginLeft = "100px";
        }
    }
    localStorage.setItem("selectedPlacementFormat", selectedFormat);
}
window.addEventListener("load", () => {
    const savedFormat = localStorage.getItem("selectedPlacementFormat");
    if (savedFormat) {
        document.querySelector(`input[name='ptype'][value='${savedFormat}']`).checked = true;
    }
    changePlacement();
});

//Code to change the color of the date,time and greeting message
function colorChange(){
    const setBtn = document.getElementById("setColor");
    setBtn.addEventListener("click",() =>{
        var color = document.getElementById("clrSelector").value;
        dtplacement.style.color = color;
        localStorage.setItem("selectedColor", color);
    });
}
window.addEventListener("load",()=>{
    const savedFormat = localStorage.getItem("selectedColor");
    if(savedFormat){
        dtplacement.style.color = savedFormat;
        document.getElementById("clrSelector").value = savedFormat;
    }
    colorChange();
})

greetingMessage();
twentyFourHour();

