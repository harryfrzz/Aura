var unq = 0;
const linkObject = [];
const linkBtn = document.getElementById("linkAddBtn");
const linkPlaceHolder = document.getElementById("linkHolder");
linkBtn.onclick = function(){
    unq++;
    localStorage.setItem("linkunqvalue",unq);
    var linkKey = `link-${unq}`;
    var linkInput = document.getElementById("linkSpace").value;
    var linkName = document.getElementById("linkName").value;
    var obj = `<div id="linkObject">
                <a id="link" href="${linkInput}" style="color: aliceblue;">${linkName}</a> 
               </div>`
               linkObject.push(obj);
    linkPlaceHolder.innerHTML = linkObject.join(''); 
    localStorage.setItem(linkKey,obj);
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
            console.log(keyArray[j])
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