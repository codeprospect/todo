// importing the function for creating buttons
import newButtons from './buttons.js';
// importing the function for creating the task card
import newCard from './card.js';
// importing the functions that validate the user's input
import { verifyInput, setError, removeError } from './input.js';


const input = document.querySelector('input');
const form = document.getElementById('form');
const taskContainer = document.getElementById('tasks');
let counter = 0;

//creating a new list item

form.addEventListener('submit', (e) => {
  e.preventDefault();

  createNewTask();

  input.value = "";
});

const createNewTask = () => {

  counter++;

  //collecting the value from the input
  const newTask = input.value.trim();

  //checking whether the value inputted is blank
  if (verifyInput(newTask)) {
    setError("please type something");
  } else {
    removeError();

    const listItem = document.createElement('li');

    newCard(newTask, counter, listItem);

    newButtons(counter, listItem);

    taskContainer.appendChild(listItem);

  }

};


// cross task and deleting tasks
window.addEventListener('click', (e) => {

  //ensuring that the button clicked is the done button
  if (e.srcElement.className == "material-icons done") {
    //getting the task with the same id as the button
    const taskCrossed = document.getElementById(e.srcElement.id);
    taskCrossed.classList.toggle('cross');
    const parent = taskCrossed.parentElement;
    parent.classList.toggle('done');
  }

  //checking if the button clicked is the delete button
  if (e.srcElement.className == "material-icons delete") {
    //getting the task with the same id as the button
    const taskDeleted = document.getElementById(e.srcElement.id);
    // getting the parent node of the button clicked
    taskDeleted.parentElement.remove();

  }
});
