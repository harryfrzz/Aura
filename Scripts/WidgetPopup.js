//Code for widget page popup
const widgetBtn = document.getElementById("widgets");
const closeWidgetPopup = document.getElementById("closeWidgetPopup");
widgetBtn.addEventListener("click",function () {
    widgetPopup.classList.add("showWidget");
    }
);
closeWidgetPopup.addEventListener("click",function () {
    widgetPopup.classList.remove("showWidget");
    }
);
