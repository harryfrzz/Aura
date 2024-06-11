var lunq = 0;
const linkObject = [];
const linkBtn = document.getElementById("linkAddBtn");
const linkPlaceHolder = document.getElementById("linkHolder");
linkBtn.onclick = function(){
    lunq++;
    localStorage.setItem("linkunqvalue",lunq);
    var linkKey = `link-${lunq}`;
    var deleteButKey = `delete-${lunq}`;
    var linkInput = document.getElementById("linkSpace").value;
    var linkName = document.getElementById("linkName").value;
    var objlink = `<div id="${linkKey}" class="linkObject">
                <a id="link" href="${linkInput}" style="color: aliceblue;">${linkName}</a> 
                <img onclick="removeLink(this)" id="${deleteButKey}" class="delete-button" src="icons/delete.png" width="20" height="20">
               </div>`
    linkObject.push(objlink);
    linkPlaceHolder.innerHTML = linkObject.join(''); 
    localStorage.setItem(linkKey,objlink);
}
unq = localStorage.getItem("linkunqvalue");
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
main();