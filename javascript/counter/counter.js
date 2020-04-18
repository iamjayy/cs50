/* //counter
  let counter = 0;
  function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
  
    //every 10 counts (mod) will alert
    if (counter % 10 === 0) {
      alert(`counter is at ${counter}!`);
    }
  } */

//counter with event listener no onclick function
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").onclick = count;
});

let counter = 0;

function count() {
  counter++;
  document.querySelector("#counter").innerHTML = counter;

  //every 10 counts (mod) will alert
  if (counter % 10 === 0) {
    alert(`counter is at ${counter}!`);
  }
}
