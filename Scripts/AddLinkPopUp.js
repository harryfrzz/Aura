const myButton = document.getElementById("addLink");
const closePopup = document.getElementById("closePopup");
myButton.addEventListener("click",function () {
        linkPopup.classList.add("show");
    }
);
closePopup.addEventListener("click",function () {
        linkPopup.classList.remove("show");
    }
);
