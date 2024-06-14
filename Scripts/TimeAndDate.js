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
        changeDate();
    }
}
function changeDate(){
    const d = new Date();
    const dateObject = document.getElementById("date");
    let day = d.getDay();
    if(day == 0){
        dateObject.textContent = "It's Sunday";
    }else if(day == 1){
        dateObject.textContent = "It's Monday";
    }else if(day == 2){
        dateObject.textContent = "It's Tuesday";
    }else if(day == 3){
        dateObject.textContent = "It's Wednesday";
    }else if(day == 4){
        dateObject.textContent = "It's Thursday";
    }else if(day == 5){
        dateObject.textContent = "It's Friday";
    }else if(day == 6){
        dateObject.textContent = "It's Saturday";
    }
}
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
changeTime();
changeDate();
greetingMessage();


