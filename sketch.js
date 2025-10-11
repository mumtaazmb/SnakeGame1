const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
let foodX;
let foodY;

function setup(){
    createCanvas(600,600);
    frameRate(3);
    let numberofcells = width / GRID_SIZE;
    let randomcell = random(numberofcells);
    let randomCellFloor = floor(randomcell);
    console.log("randomCellFloor:", randomCellFloor);

    foodX = randomCellFloor * GRID_SIZE
    foodY = floor(random(randomCellFloor)* GRID_SIZE)

}


function draw(){
    background(0);
    rect(headX,headY,GRID_SIZE,GRID_SIZE);
    circle(foodX + GRID_SIZE / 2,foodY + GRID_SIZE / 2,GRID_SIZE);
 //   headX = headX + GRID_SIZE;
    if(headX > width){
        rect(580,headY,20,20)};
    movement()
    
    
}

function movement(){
if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      headY = headY - 20;
    } else if (keyCode === DOWN_ARROW) {
      headY = headY + 20;
    } else if (keyCode === LEFT_ARROW) {
      headX = headX - 20;
    } else if (keyCode === RIGHT_ARROW) {
      headX = headX + 20;
    }
  }
}