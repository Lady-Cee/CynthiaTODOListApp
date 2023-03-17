// Add item to the TODO List


const TODOList = [];


localStorage.setItem("task-list", JSON.stringify(TODOList))
const data = JSON.parse(localStorage.getItem("task-list"))

const form = document.querySelector('form')
let ul = document.querySelector("ul");
let addButtonElement = document.querySelector("add-btn");
let editButtonElement = document.getElementById("edit-btn")
let deleteButtonElement = document.getElementById("delete-btn")
let inputBtn = document.getElementById("task-list")


function addItems(items){
//  let li = document.createElement("li");
//  li.textContent = items;
//  ul.appendChild(li);
 
 const li = document.createElement("li");
 li.textContent = items;
 ul.appendChild(li);
}

form.addEventListener("submit", function(e){
    e.preventDefault()
   
    addItems(inputBtn.value)
    inputBtn.value="";
})

form.addEventListener("submit", function(e){
    e.preventDefault()
   
    TODOList.unshift(inputBtn.value)
    localStorage.setItem("task-list", JSON.stringify(TODOList))
})
