const d = new Date();
let hour = d.getHours();
let dateString = d.toDateString();
let greetingText = document.getElementById("greetingText");
//let dateHolder = document.getElementById("dateHolder");
function changeHeading(){
    if(hour < 12){
        greetingText.textContent = "Good Morning";
    }else if(hour > 12){
        greetingText.textContent = "Good Evening";
    }
}
function datePlaceHolder(){
    dateHolder.textContent = dateString;
}
changeHeading();
//datePlaceHolder();