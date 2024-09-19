todoContainer = document.getElementById("todoitemcontainer");
let c=1;
function addData() {
  let todotextcontainer = document.createElement("li");
  todotextcontainer.classList.add("text-container", "d-flex", "flex-row");
  todotextcontainer.id="madhav"+c;
  todoContainer.appendChild(todotextcontainer);
// 
  userInput=document.getElementById("userInput");
  userInputValue=userInput.value;
//
  let inputelement = document.createElement("input");
  inputelement.type = "checkbox";
  inputelement.id = "checkbox-Id"+c;
  inputelement.classList.add("checkbox-input");
  todotextcontainer.appendChild(inputelement); //2

  let labelElement = document.createElement("div");
  labelElement.classList.add("label-element", "d-flex", "flex-row");
  todotextcontainer.appendChild(labelElement);

  let labelText = document.createElement("label"); //1.
  labelText.textContent = userInputValue;
  labelText.htmlFor = "checkbox-Id"+c;
  labelText.classList.add("label-text");
  labelElement.appendChild(labelText);
   
deleteIcon=document.createElement("div");
deleteIcon.classList.add("delete-icon-container");
deleteIcon.id="deletionID"+c;
labelElement.appendChild(deleteIcon);
elementRemove=document.getElementById("deletionID"+c);
elementRemove.onclick=function(){
        deleteid(todotextcontainer.id);
};
iElement=document.createElement('i');
iElement.classList.add("far","fa-trash-alt","deletionID");
deleteIcon.appendChild(iElement);
  c=c+1;
}
function deleteid(id) {
   let varma=document.getElementById(id);
    todoContainer.removeChild(varma);
    
}
elementsAdd = document.getElementById("adding-element");
elementsAdd.onclick = addData;




