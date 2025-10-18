const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
let foodX;
let foodY;
let xdir = 1
let ydir = 0
let gameOver = false

function setup(){
    createCanvas(600,600);
    frameRate(3);
    position()

}
function draw(){
    background(215,181,216);
    play()
    
}

/**
 * positions the food at a random location on the grid
 * updates the global foodX and foodY values
 */
function position(){
  let numberofcells = width / GRID_SIZE;
  let randomcell = random(numberofcells);
  let randomCellFloor = floor(randomcell);
  console.log("randomCellFloor:", randomCellFloor);

  foodX = randomCellFloor * GRID_SIZE
  foodY = floor(random(randomCellFloor)* GRID_SIZE)
}

function play(){
if (!gameOver){
    fill(255,209,220)
    rect(headX,headY,GRID_SIZE,GRID_SIZE);
    headX = headX + (GRID_SIZE * xdir)
    headY = headY + (GRID_SIZE * ydir)
    fill(25,10,50)
    circle(foodX + GRID_SIZE / 2,foodY + GRID_SIZE / 2,GRID_SIZE);
} 
if (headX >= width || headX < 0 || headY >= height || headY < 0){
    gameOver = true 
    }
}


function keyPressed() {
  if (keyCode === UP_ARROW ) {
    xdir = 0;
    ydir = -1;
  } else if (keyCode === DOWN_ARROW ) {
    xdir = 0;
    ydir = 1;
  } else if (keyCode === LEFT_ARROW) {
    xdir = -1;
    ydir = 0;
  } else if (keyCode === RIGHT_ARROW ) {
    xdir = 1;
    ydir = 0;
  }
}

