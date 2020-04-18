document.addEventListener("DOMContentLoaded", () => {
  //change the color of the heading when drop down changes
  document.querySelector("#color-change").onchange = function() {
    document.querySelector("#hello").style.color = this.value;
  };
});
