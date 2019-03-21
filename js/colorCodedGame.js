var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons(){
  //Mode buttons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //How many squares to Show
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}


function setupSquares(){
  //### Comment ###
  for (var i = 0; i < squares.length; i++){
    //Add 'click' event listeners
    squares[i].addEventListener("click", function(){
      //Grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        h1.style.color = "white";
      } else {
        this.style.backgroundColor = "white";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}


function reset(){
  //Generate all new colors
  colors = generateRandomColors(numSquares);
  //Pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  //Change reset button to "New Colors" after win
  resetButton.textContent = "New Colors";
  //Clear displayed message displayed on reset
  messageDisplay.textContent = "";
  //Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#0f4778";
  h1.style.color = "#e0b873";
}


//Reset button event listeners
resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
  //Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //Change ench color to match correct color
    squares[i].style.backgroundColor = color;
  }
}


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
  //Make an array
  var arr = [];
  //Repeat num times
  for (var i = 0; i < num; i++){
    //Get random color and push into arr
    arr.push(randomColor());
  }
  //Return array
  return arr;
}


function randomColor(){
  //Pick a "red" from 0- 255
  var r = Math.floor(Math.random() * 256);
  //Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //Create "rgb(r, g, b)" string
  return "rgb(" + r +", " + g + ", " + b + ")";
}
