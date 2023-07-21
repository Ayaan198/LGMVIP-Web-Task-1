const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
     if(inputBox.value === ''){
        alert("Kindly add a Task");
     }
     else{
        let stored = document.createElement("li");
        stored.innerHTML = inputBox.value;
        listContainer.appendChild(stored);
        let cross = document.createElement("span");
        cross.innerHTML = "\u274C";
        stored.appendChild(cross)
     }
     inputBox.value = '';
     savedList(); //for saving data everytime we savedList or close browser
}

//when clicking on task or cross button
listContainer.addEventListener("click",function(a) {
    if (a.target.tagName == "LI"){   /*STORED IS THE PARENT ELEMENT */
        a.target.classList.toggle("checked");
        savedList();
    }
    else if(a.target.tagName=="SPAN"){
        a.target.parentElement.remove();
        savedList();
    }
} , false);

//saving our tasks in localstorage while savedListing by setItem
function savedList(){
    localStorage.setItem("data", listContainer.innerHTML );
}

//displaying our tasks in localstorage while savedListing by getItem
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();
