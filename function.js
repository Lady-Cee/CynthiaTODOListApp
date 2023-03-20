
let addButtonElement = document.getElementById("add-btn");
let inputBtn = document.getElementById("input-field");
let toDoContainer = document.getElementById("toDoContainer");

const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))



function createItems(addText){
    const paragraph = document.createElement("p");
    paragraph.textContent = addText;
    toDoContainer.appendChild(paragraph);
} 

addButtonElement.addEventListener('click', function(e){
    e.preventDefault()

    itemsArray.push(inputBtn.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    createItems(inputBtn.value);
    inputBtn.value = "";

    
})


data.forEach((typeText) => {
    createItems(typeText)
  })

