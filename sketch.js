var canvas, backgroundImage;

//zero gameState means game has not begun yet hence display the login page
var gameState = 0;

//playerCount value intialized with zero
var playerCount = 0;

//this is the interface between our code and the remote database
var database;

var form, player, game;

var player1,player2,player3,player4;
var allPlayers;
var title, input, button;

var cars;
var car1, car2, car3, car4;
var background,


function setup(){
  
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  

  //connecting code to DB
  database = firebase.database(); 
     
  //to start game
  game = new Game();
  game.getState();
  game.start();

 
}


function draw(){

  //here I am writing the various conditions that are going to take place in different game states
  if(playerCount === 4) {
    //here we are checking if player count is 4, then update game state to 1
    game.update(1);
  }
  if(gameState === 1) {
    //this will clear the login page and take us to the game
    clear();
    //and the game will start
    game.play();
  }
  if(gameState === 2) {
    game.end();
  }
}//aya smjh me itna?