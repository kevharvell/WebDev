let body = document.body;

// Create the table and append to body
let table = document.createElement("TABLE");
table.setAttribute("id", "table");
body.appendChild(table);




// Construct the 4x4 table
for(let i = 1; i <= 4; i++) {
	let row = document.createElement("TR");
  document.getElementById("table").appendChild(row);
  let tempRow = document.getElementById("table").children[i - 1];
  // First row is a header row
  if(i == 1) {
  	for(let j = 1; j <= 4; j++) {
  		let header = document.createElement("TH");
  		header.textContent = "Header " + j;
  		tempRow.appendChild(header);
  	}
  } 
  // Rest of the rows are data cells
  else {
    for(let j = 1; j <= 4; j++) {
    	let dataCell = document.createElement("TD");
    	dataCell.textContent = "(" + (i - 1) + ", " + j + ")";
    	tempRow.appendChild(dataCell);
    }
  }
}

// Directional Functionality
function makeBorder(element) {
	element.style.border = "3px solid turquoise"
}

function removeBorder(element) {
	element.style.border = "";
}

// Mark Cell Function
function markCell(element) {
	element.style.backgroundColor = "yellow";
}

let tempTDArr = document.getElementsByTagName("TD");
let currIndex = 0;
let currPos = tempTDArr[currIndex];
makeBorder(currPos);

function moveUp() {
	let newIndex = currIndex;
	newIndex -= 4;
  if(newIndex >= 0) {
		removeBorder(currPos);
		currIndex = newIndex;
		currPos = tempTDArr[currIndex];
		makeBorder(currPos);
	}
}

function moveRight() {
	let newIndex = currIndex;
	newIndex++;
  if(newIndex % 4 != 0) {
		removeBorder(currPos);
		currIndex = newIndex;
		currPos = tempTDArr[currIndex];
		makeBorder(currPos);
	}
}

function moveDown() {
	let newIndex = currIndex;
	newIndex += 4;
  if(newIndex <= 11) {
		removeBorder(currPos);
		currIndex = newIndex;
		currPos = tempTDArr[currIndex];
		makeBorder(currPos);
	}
}

function moveLeft() {
	let newIndex = currIndex;
	newIndex--;
  if(((newIndex + 1) % 4) != 0) {
		removeBorder(currPos);
		currIndex = newIndex;
		currPos = tempTDArr[currIndex];
		makeBorder(currPos);
	}
}




// Create the buttons
for(let i = 1; i <= 5; i++) {
	let button = document.createElement("BUTTON");
	body.appendChild(button);
}

let tempButtons = body.getElementsByTagName("BUTTON");
let up = tempButtons[0];
let right = tempButtons[1];
let down = tempButtons[2];
let left = tempButtons[3];
let markCellBtn = tempButtons[4];

up.textContent = "Up";
right.textContent = "Right";
down.textContent = "Down";
left.textContent = "Left"
markCellBtn.textContent = "Mark Cell";

// Button Events
right.addEventListener("click", moveRight);
up.addEventListener("click", moveUp);
down.addEventListener("click", moveDown);
left.addEventListener("click", moveLeft);
markCellBtn.addEventListener("click", () => markCell(currPos));















