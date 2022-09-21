// let squares = document.querySelectorAll(".square");
// console.log(squares)
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element, All expands
// JS gets the literal chunks of HTML

// for (let square of squares) {
  // use a loop to apply the behavior to every square

  // square.addEventListener("click", (event) => {
    // listen (wait) for the user to click and then do the stuff inside the {}
    // template literal allows us to put variable values in the middle of text
    // square.classList.remove("purple");
    // square.classList.add("teal");
    // if (square.id === "square--one") {
    //   console.log(`The ${square.innerText} was clicked`);
    //   frame.style.backgroundImage = 'url("http://placekitten.com/300/300")';
  //   }
  // });
// }

const display = document.querySelector(".display")
//consider all of the .squares (class) on page
// let squares = document.querySelectorAll(".square")
// for (let input of squares)
// // event listener when we click WHAT did we click?
// input.addEventListener("click", (event) => {
//   console.log(input.innerText)
//   let newElement = document.createElement("div")
//   let text = document.createTextNode(event.target.innerText)
//   newElement.appendChild(text)
//   display.appendChild(newElement)
// })

let squares = Array.from(document.getElementsByClassName("square"));
// declaring the name of new array containing all squares (operators and operands) => mapping array into switch case statements allowing for clearing of display, evaluation of display text, or adding to the items to calculate
squares.map((square) => {
  square.addEventListener("click", (e) => {
    switch (square.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += square.innerText;
    }
  })
}
)
// note on lines 47 and 39 above, square.innerText could also be e.target.innerText -- both work...like to know why you would use one over the other

