const GRID_SIZE = 20;
let headX = 40;;
let headY = 40
let numberOfCells = width / GRID_SIZE;
let randomCell = random(numberofCells)
let randomCellFloor = floor(randomCell)
let foodX;
let foodY;

function setup(){
    createCanvas(600,600);
    frameRate(3)
    let foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2
    let foodY = random(600)

}
function draw(){
    background(0);
    rect(headX,headY,20,20);
    circle(foodX,foodY,GRID_SIZE)
    headX = headX + GRID_SIZE;
    if(headX > width){
        rect(580,headY,20,20)};
    
    

}
