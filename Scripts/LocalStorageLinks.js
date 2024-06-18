//Variables
var lunq = 0;
const linkObject = [];
const linkBtn = document.getElementById("linkAddBtn");
const linkPlaceHolder = document.getElementById("linkHolder");

//Onclick function for inserting the linkobject into the html and localstorage
linkBtn.onclick = function(){
    lunq++;
    localStorage.setItem("linkunqvalue",lunq);
    var linkKey = `link-${lunq}`;
    var deleteButKey = `delete-${lunq}`;
    var linkInput = document.getElementById("linkSpace").value;
    var linkName = document.getElementById("linkName").value;
    var objlink = `<div id="${linkKey}" class="linkObject">
                <a id="link" href="${linkInput}" target="_blank" style="color: aliceblue;">${linkName}</a> 
                <img id="${deleteButKey}" class="delete-button" src="icons/delete.png" width="20" height="20">
               </div>`
    linkObject.push(objlink);
    linkPlaceHolder.innerHTML = linkObject.join(''); 
    localStorage.setItem(linkKey,objlink);
    document.getElementById("linkHolder").style.display = "flex";
}
lunq = localStorage.getItem("linkunqvalue");


/*Function to retrive the value from the localStorage and display it in the HTML*/
function main(){
    var keyArray = [];
    var linkArray = [];
    var arr = [];
    for (let i = 0; i < localStorage.length; i++) { 
        let values = localStorage.key(i);
        keyArray.push(values);
    }
    for (let j = 0; j < localStorage.length; j++) { 
        if(keyArray[j].startsWith("link-")){
            linkArray.push(keyArray[j]);  
        }
    }
    linkArray.sort();
    for (let k = 0; k < localStorage.length; k++){
        var htmlObj = localStorage.getItem(linkArray[k]);
        arr.push(htmlObj);
        linkPlaceHolder.innerHTML = arr.join('');
      }
    
}
//Code for retrieving the ID of the element of class .delete-button
document.addEventListener('click', function () {
    var buttons = document.querySelectorAll('.delete-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            removeLink(button);
        });
    });
});

//Function to remove the link object from the localstorage and HTML 
function removeLink(btn) {
    var buttonID = btn.id;
    console.log(buttonID);
    var keyArray = [];
    var linkArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let values = localStorage.key(i);
        keyArray.push(values);
    }
    for (let j = 0; j < localStorage.length; j++) {
        if (keyArray[j].startsWith("link-")) {
            linkArray.push(keyArray[j]);
        }
    }
    linkArray.sort();
    for (let k = 0; k < linkArray.length; k++) {
        if (linkArray[k].slice(5) == buttonID.slice(7)) {
            localStorage.removeItem(linkArray[k]);
            var element = document.getElementById(linkArray[k]);
            element.remove();  
        }
    }
}
main();

