// importing the function for creating buttons
import newButtons from './buttons.js';
// importing the function for creating the task card
import newCard from './card.js';


const input = document.querySelector('input');
const form = document.getElementById('form');
const taskContainer = document.getElementById('tasks');
let counter = 0;

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

    newCard(newTask, counter, taskContainer);

    newButtons(counter, taskContainer);
  }

};


// cross task and deleting tasks
window.addEventListener('click', (e) => {

  //ensuring that the button clicked is the done button
  if (e.srcElement.className == "material-icons done") {
    //getting the task with the same id as the button
    const taskCrossed = document.getElementById(e.srcElement.id);
    taskCrossed.classList.toggle('cross');
    taskCrossed.classList.toggle('green');
  }

  //checking if the button clicked is the delete button
  if (e.srcElement.className == "material-icons delete") {
    //getting the task with the same id as the button
    const taskDeleted = document.getElementById(e.srcElement.id);
    // getting the parent node of the button clicked
    const currentButtons = e.path[1];
    //removing the task from the DOM
    taskDeleted.remove();
    //removing the buttons from the DOM
    currentButtons.remove();

  }
});
