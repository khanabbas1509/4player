var cnvas,backgroundimg,playerCount;
var gameState = 0;
var database,form,game,player;
var allplayers

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}
function draw(){

}