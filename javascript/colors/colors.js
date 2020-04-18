/* document.addEventListener("DOMContentLoaded", function() {
  //change font to red
  document.querySelector("#red").onclick = function() {
    document.querySelector("#hello").style.color = "red";
  };
  //change font to blue
  document.querySelector("#blue").onclick = function() {
    document.querySelector("#hello").style.color = "blue";
  };
  //change font to green
  document.querySelector("#green").onclick = function() {
    document.querySelector("#hello").style.color = "green";
  };
});
 */

/* document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".color-change").forEach(function(button) {
    button.onclick = function() {
      document.querySelector("#hello").style.color = button.dataset.color;
    };
  });
}); */

// es6 arrow function
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".color-change").forEach(button => {
    button.onclick = () => {
      document.querySelector("#hello").style.color = button.dataset.color;
    };
  });
});
