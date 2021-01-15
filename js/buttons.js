//function for creating the done and delete buttons
export default const newButtons = (idValue) => {
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
