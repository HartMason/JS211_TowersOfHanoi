// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)
  if(row.lastElementChild && !stone) {
    return pickUpStone(row.id)
  } if(!row.lastElementChild && !stone) {
    return console.log("there is no stone in hand or in row")
  }
  if(!row.lastElementChild && stone) {
    return dropStone(row.id)  
  }
  if(row.lastElementChild.getAttribute("id") > stone.getAttribute("id")) {
    return dropStone(row.id)
  }
  
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  let selectedRow = document.getElementById(rowID);
  console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  document.getElementById(rowID).appendChild(stone)
  stone = null
  checkForWin()
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

function checkForWin() {
  if(document.getElementById("top-row").childElementCount == 4) {
    // return console.log("You Won")
    alert("You've Won")
    document.getElementById("wonMessage").innerHTML
  } else {
    return console.log("Next Move")
  }
  
}

const resetGame = () => {
  console.log("the game was reset")
  const towers = getElementByTagName("div")
  for (i =0; i < towers.length; i++) {
    console.log(towers[i]) 
    towers[i].innerHTML= null
  let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};
}
}
