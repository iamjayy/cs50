/* document.querySelector("#new-task").onsubmit = () => {
  //create item for list
  const li = document.createElement("li");
  li.innerHTML = document.querySelector("#task").value;

  //create new item to task list
  document.querySelector("#tasks").append(li);

  //clear input field
  document.querySelector("#task").value = "";

  //stop form from submitting
  return false;
  
}; */

//fix submit button from submitting empty strings
document.addEventListener("DOMContentLoaded", () => {
  // by default submit button is disabled
  document.querySelector("#submit").disabled = true;

  //enable button only if there is text in the input field
  document.querySelector("#task").onkeyup = () => {
    if (document.querySelector("#task").value.length > 0)
      document.querySelector("#submit").disabled = false;
    else document.querySelector("#submit").disabled = true;
  };

  document.querySelector("#new-task").onsubmit = () => {
    const li = document.createElement("li");
    li.innerHTML = document.querySelector("#task").value;

    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";
    document.querySelector("#submit").disabled = true;

    return false;
  };
});
