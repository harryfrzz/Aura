setInterval(changeTime,1000);

function changeTime(){
    const d = new Date();
    const timeObject = document.getElementById("time");
    let hour = d.getHours();
    let minutes = d.getMinutes();
    
    if(hour < 10){
        timeObject.textContent = `0${hour}:${minutes}`;
    }
    if(minutes < 10){
        timeObject.textContent = `${hour}:0${minutes}`;
    }
    if(minutes < 10 && hour < 10){
        timeObject.textContent = `0${hour}:0${minutes}`;
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
changeTime();
changeDate();

