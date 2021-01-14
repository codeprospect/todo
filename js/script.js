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

    newCard(newTask, counter);

    newButtons(counter);
  }

};

// function for verifying input
const verifyInput = (taskInput) => {
  if (taskInput == '') {
    return true;
  }
};

//function to display an error
const setError = (message) => {
  const errorDiv = document.getElementById('message');
  errorDiv.textContent = message;
  errorDiv.classList.add("error");
};

//function to remove error from page
const removeError = () => {
  const errorDiv = document.getElementById('message');
  errorDiv.classList.remove("error");
}

//function for creating the new task card
const newCard = (taskInput, idValue) => {

  //creating a new task
  const newTaskCard = document.createElement('div');

  //assigning the new task a class
  newTaskCard.className = 'task-name';

  //creating the id attribute
  newTaskCard.id = `${idValue}`;

  //assigning the task inputted to the new div
  newTaskCard.textContent = taskInput;

  taskContainer.appendChild(newTaskCard);
};


//function for creating the done and delete buttons
const newButtons = (idValue) => {
  //creating the div containing the done and delete buttons
  const iconsDiv = document.createElement('div')
  iconsDiv.classList.add('icons');


  //creating the done button
  const doneButton = document.createElement('i');
  doneButton.className = 'material-icons done';
  //giving the id the same id as the task
  doneButton.id = `${idValue}`;
  doneButton.textContent = 'check_box';

  //creating the delete task button
  const deleteButton = document.createElement("i");
  deleteButton.className = 'material-icons delete';
  //giving the delete button the same id as the task
  deleteButton.id = `${idValue}`;
  deleteButton.textContent = 'delete';

  //adding the delete and done buttons to the "icons" div
  iconsDiv.appendChild(doneButton);
  iconsDiv.appendChild(deleteButton);

  //appending the new task to the taskContainer
  taskContainer.appendChild(iconsDiv);

};



//cross task
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
