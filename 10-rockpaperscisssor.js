let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

updateScore();
/*

if (!score){
score={
  wins : 0,
  losses : 0,
  ties : 0
};
}
*/


function playerMove(Move){
const computerMove = computerMoves();
let result = '';
if (Move === 'scissor'){
if (computerMove === 'rock')
{
  result = 'You Lose.';
}
else if(computerMove === 'paper')
{
  result = 'You Won.'
}
else if(computerMove === 'scissor'){
  result = 'Tie.';
}
}
else if (Move === 'paper'){
if (computerMove === 'rock')
{
  result = 'You Won.';
}
else if(computerMove === 'paper')
{
  result = 'Tie.'
}
else if(computerMove === 'scissor'){
  result = 'You Lose';
}
}

else if (Move === 'rock'){
if (computerMove === 'rock')
{
  result = 'Tie.';;
}
else if(computerMove === 'paper')
{
  result = 'You Lose.'
}
else if(computerMove === 'scissor'){
  result = 'You Won.';
}
}

if (result === 'You Won.')
{
score.wins += 1;
}
else if(result === 'You Lose.'){
score.losses += 1;
}
else if(result === 'Tie.')
{
score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));
updateScore();

document.querySelector('.result')
.innerHTML =`${result}`;

document.querySelector('.decision')
.innerHTML =`You  <img class="design-icon" src="${Move}-emoji.png">   <img class="design-icon" src="${computerMove}-emoji.png"> Computer`;
}

function updateScore(){

document.querySelector('.score-rsp')
.innerHTML =`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

}

function computerMoves(){
const randomNumber = Math.random();
let computerMove = '';
if (randomNumber >= 0 && randomNumber < 1/3)
{
computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber <=1)
{
computerMove = 'scissor';
}
return computerMove;
}
