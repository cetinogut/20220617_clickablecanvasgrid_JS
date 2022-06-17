var canvas = document.getElementById("canvas"), //html canvas created
ctx = canvas.getContext("2d");
canvas.addEventListener('click', handleClick); // click event listener

function handleClick(e) {
    grid.drawSpreadsheet() // clean the spreadsheet. 
    ctx.lineWidth = gridCellClicked.increaseThickness; // prepare to change the line thickness of the clicked cell
    ctx.strokeRect(Math.floor(e.offsetX/gridCell.width)*gridCell.width + gridCellClicked.thicker, // get the coordinate of the mouse click and find the x & y value off the cell then draw new rectangle with thicker lines, +2 added to absorb the increase in thickness
       Math.floor(e.offsetY/gridCell.height)*gridCell.height + gridCellClicked.thicker, //+2 added to absorb the increase in thickness
       gridCellClicked.width , gridCellClicked.height); // draw a smaller rect cell to be in current cell and absorb thickness difference..
}

class Spreadsheet {
    constructor(rowCount, columnCount) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
    }
    
    drawSpreadsheet() {
        //drawing the grid
        ctx.beginPath();
        ctx.fillStyle = "white"; // fill color
        ctx.lineWidth = gridCell.linethickness;
        ctx.strokeStyle = 'black'; // line color
        for (var row = 0; row < this.rowCount; row++) {
            for (var column = 0; column <this.columnCount; column++) {
                var x = column * gridCell.width;
                var y = row * gridCell.height;
                ctx.rect(x, y, gridCell.width, gridCell.height);
                ctx.fill();
                ctx.stroke();
            }
        }
        ctx.closePath();
        //finished drawing
    }
}

class Cell { // generic cell rectangle in the spreadsheet.
    constructor(height, width, linethickness) {
      this.height = height;
      this.width = width;
      this.linethickness = linethickness;
    }
  }

class ClickedCell extends Cell{ // this extends fro mcell with thicher lines and smaller in size to fit in the cell..
    constructor(height, width, linethickness, thicker) {
        super(height, width, linethickness);
        this.thicker = thicker;
        this.height = this.height - this.thicker*2;
        console.log(this.height)
        this.width = this.width - this.thicker*2;
        console.log(this.width)
    }
     increaseThickness(){ // custom method in the extended class
        return this.linethickness + this.thicker;
     }
}

let grid = new Spreadsheet(10, 10) // create an instance of a 10by10 spreadsheet
let gridCell = new Cell (40,80,3) // cell dimension and line thickness
let gridCellClicked = new ClickedCell(40,80,3,2) // clicked cell has 2px thicker line thickness
grid.drawSpreadsheet(); // draw the instance of the spreadsheet.


