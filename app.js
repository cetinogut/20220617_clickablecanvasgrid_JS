var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");
canvas.addEventListener('click', handleClick);

let widthHeightRatio = 2;
let height = 40; //in pixels
let width = height * widthHeightRatio ; // in pixels
let regularLine = 3; // in pixels
let thicknessDifference = 2; // increase regular line thickness by 2 pixels
let thickLine = regularLine + thicknessDifference; 

function drawBox() {
    let rowCount = 10; //for 10x10 grid
    let columnCount = 10; //for 10x10 grid
    
    //drawing the grid
    ctx.beginPath();
    ctx.fillStyle = "white"; // fill color
    ctx.lineWidth = regularLine;
    ctx.strokeStyle = 'black'; // line color
    for (var row = 0; row < rowCount; row++) {
        for (var column = 0; column < columnCount; column++) {
            var x = column * width;
            var y = row * height;
            ctx.rect(x, y, width, height);
            ctx.fill();
            ctx.stroke();
        }
    }
    ctx.closePath();
    //finished drawing
}

function handleClick(e) {

    drawBox() // clean the spreadsheet. 
    
    ctx.lineWidth = thickLine; // prepare to change the line thickness of the clicked cell

    ctx.strokeRect(Math.floor(e.offsetX/width)*width + thicknessDifference, // get the coordinate of the mouse click and find the x & y value off the cell then draw new rectangle with thicker lines, +2 added to absorb the increase in thickness
       Math.floor(e.offsetY/height)*height + thicknessDifference, //+2 added to absorb the increase in thickness
       width-thicknessDifference*2 , height-thicknessDifference*2); // draw a smaller rect cell to be in current cell and absorb thickness difference..
       
    //ctx.fillStyle = "red"; // prepare to change the fill color of the clicked cell
    // ctx.fillRect(Math.floor(e.offsetX/80)*80, 
    // Math.floor(e.offsetY/40)*40,
    // 80, 40);


}


drawBox();


