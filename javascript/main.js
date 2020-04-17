//make a function
/* function hello() {
	alert('hello');
}
 */

//query selector
/* function hello() {
  document.querySelector("h1").innerHTML = "goodbye";
} */

let counter = 0;

function count() {
  counter++;
  document.querySelector("#counter").innerHTML = counter;
}
