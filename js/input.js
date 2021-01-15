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

export {verifyInput, setError, removeError}
