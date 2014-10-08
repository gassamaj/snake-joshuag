var  snake;
var  snakeLenght;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize ();
gameDraw();

function gameInitialize() {
       var canvas = document. getElementById ("game-screen");
       context= canvas.getContext ("2d");
       
       screenWidth = window.innerWidth;
       ScreenHeight = window.innerHeight;

       canvas.width = screenWidth;
       canvas.height = screenHeight;
   }

function gameLoop () {

}

function gameDraw() {
    context.fillStyle = "rgb (180, 250; 213)";
    context.fillRect (0,0, screenwidth, screenHeight);
}

function snakeInitialize() {
    snake = [];
    snakeLength =  15;
    snakeSize = 20;
}

function snakeDraw () {


}

function snakeUpdate() {
    }