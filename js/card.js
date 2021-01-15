//function for creating the new task card
const newCard = (taskInput, idValue, parentDiv) => {

  //creating a new task
  const newTaskCard = document.createElement('div');

  //assigning the new task a class
  newTaskCard.className = 'task-name';

  //creating the id attribute
  newTaskCard.id = `${idValue}`;

  //assigning the task inputted to the new div
  newTaskCard.textContent = taskInput;

  parentDiv.appendChild(newTaskCard);
};

export default newCard;
