//Code for Settings Popup
const settingsBut = document.getElementById("settings");
const closeBut = document.getElementById("closePopupSet");
settingsBut.addEventListener("click",function () {
        settingsPopup.classList.add("showSettings");
    }
);
closeBut.addEventListener("click",function () {
        settingsPopup.classList.remove("showSettings");
    }
);
