var unq = 0;
const taskPlaceholder = document.getElementById("objectHolder");
const htmlObject = [];
var submit = document.getElementById("submitBut");
var clear = document.getElementById("clearAllTasks");


submit.onclick = function(){
  unq++;
  localStorage.setItem("unqValue",unq);
  var htmlKey = `${unq}-html`;
  var taskKey = `${unq}-task`;
  var inputHeading = document.getElementById("task").value;
  var deleteButKey = `${unq}-delete`;
  var chkbox = `${unq}-chkbox`
  var obj = `<div id="taskObject">
                <input placeholder="Enter Task" value="${inputHeading}"  type="text" id="${taskKey}">
                <button type="submit" id="${deleteButKey}" name="delete" onclick="dno(this)" >Task Done</button>
                <button type="submit" id="${deleteButKey}" name="delete" onclick="rmv(this)" >Del</button>        
             </div>`
  htmlObject.push(obj);
  taskPlaceholder.innerHTML = htmlObject.join(''); 
  localStorage.setItem(htmlKey,obj);
  window.location.reload()
}
unq = localStorage.getItem("unqValue");
                            

function main(){
  var htmlArray = [];
  var keyArray = [];
    for (let i = 0; i < localStorage.length; i++) { 
      let values = localStorage.key(i);
      keyArray.push(values);
    }

    keyArray.sort();
    for (let j = 0; j < localStorage.length; j++){
      var htmlObj = localStorage.getItem(keyArray[j]);
      htmlArray.push(htmlObj);
      taskPlaceholder.innerHTML = htmlArray.join('');
    }
}
main();
