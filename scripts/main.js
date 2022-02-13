var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

today = mm + dd + yyyy;

var rand = randFunct(today);

turtleLocation =Math.floor(rand()*5);
turdLocation = Math.floor(rand()*5);
while(turdLocation == turtleLocation) {
    turdLocation = Math.floor(rand()*5);
}

// Random function which utilises the seed a, and
function randFunct(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

Math.floor(rand*5)


function getRow(index) {
    var board = document.getElementById("board");
    var row = 0;
    for (var i = 0; i < board.childNodes.length; i++) {
        var curr= board.childNodes[i];
        if (curr.className == "row") {
            if(row == index) {
                return curr;
            }
            row++;
        }
    }      
    return curr;  
}

function getColumn(tile) {
    var column = 0;
    console.log(currRow.childNodes);
    console.log("WEEPle");
    for (var i = 0; i < currRow.childNodes.length; i++) {
        console.log(i);
        var curr= currRow.childNodes[i];
        if (curr.className == "tile") {
            console.log("opop")
            if(curr == tile) {
                console.log("CREEPER" + column);    
                return column;
            }
            column++;
        }
    }      
    return curr;  
}

function evaluate() {
    if(selected == null) {
        return;
    }
    console.log(getColumn(selected));
    console.log("HYA");
    if (getColumn(selected) == turtleLocation) {
        // win
        selected.style.backgroundColor="green";
    }
    else if (getColumn(selected) == turdLocation) {
        // lose
        selected.style.backgroundColor="#472e1c";
    } 
    else {
        // Red
        selected.style.backgroundColor="red";
        selected = null;
        rowIndex++;
        currRow=getRow(rowIndex);
    }
}


var button = document.getElementById("submit");
button.onclick = evaluate;
var selected;
var currRow = getRow(0); 
var rowIndex = 0;

function select() {
    if (!currRow.contains(this)) {
        return;
    }
    this.backgroundColor = 'green';
    this.style.backgroundColor = "purple";
    if (selected != null) {
        selected.style.backgroundColor = "#252527";    
    }
    selected = this;
}

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener("click", select)
})
