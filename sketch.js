var snake;
var width;
var height;
var grid;
var level = 5;
var apple = [];
var score = 0;
var highScore = 0;
var ready = false;

function setup() {
    width = 400;
    height = 400;
    grid = 20;
    xMax = width/grid -1;
    yMax = height/grid -1;

    createCanvas(width, height);

    frameRate(level);
    snake = new Snake();
    setApple();

}

function draw() {
    background(0);
    drawApple();
    snake.move();
    if(!snake.alive){
        gameOver();
    }
    if(snake.tryEat(apple)){
        setApple();
        addScore();
    }

    snake.draw();
}

function gameOver(){
    ready = false;
    noLoop();
    if(score > highScore){
        highScore = score;
        document.getElementById("high-score").innerHTML = score;
    }
    level = 5;
    score = 0;
    frameRate(5);

    console.log("Game Over");

    setTimeout(function(){
        snake = new Snake();
        ready = true;
        redraw();
    },1000);
}

function addScore(){
    score += level;
    document.getElementById("snake-score").innerHTML = score;
    var newLevel = floor(score / (5 * level)) + 5;
    level = (newLevel > level)? newLevel: level;
    console.log("level: " + level);
    rate = ((level - 4) * 5);
    console.log("rate: " + rate);
    frameRate(rate);
}

function setApple(){
    apple = [
        floor(random(0,xMax)) * grid,
        floor(random(0,yMax)) * grid
    ];
}

function drawApple(){
    fill(255,0,0);
    rect(apple[0], apple[1], grid, grid);
}

function keyPressed(){
    if(ready){
       ready = false;
        loop();
    }
    if(keyCode === UP_ARROW){
        snake.speedChange(0, -1);
    }else if(keyCode === DOWN_ARROW ){
        snake.speedChange(0,1);
    }else if(keyCode === RIGHT_ARROW ){
        snake.speedChange(1,0);
    }else if(keyCode === LEFT_ARROW ){
        snake.speedChange(-1,0);
    }
}