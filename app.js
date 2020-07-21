/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
//score for each player
// scores = [0, 0];

//rounds --> one round score at a time
// roundScore = 0;

//which is the current active player
//keep track of the player playing
//0 --> first player, 1 --> second player
// activePlayer = 0;
init();

//SET ALL OTHER VALUES TO ZERO
//getElementById is faster
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

//DOM munipulation
//the object will give of access to the DOM is the document object
//document is the object
//querySelector is a method used to select things
//to id we use #
//to change the text we use textContent method
//we added activePlayer to make it more dynamic
//textContent is plain text, no html
// document.querySelector('#current-'+activePlayer).textContent = dice;
//innerHTML adds HTML tags
//this is called setter
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//to select an id and store it in a variable
//this is called getter
// var x = document.querySelector('#score-0').textContent;

//to change css of an element
//will hide the dice at the begining
//we use . for changing the style CSS
//style is a method
//then the CSS property that we want to change which is display
//none is the value
// document.querySelector('.dice').style.display = 'none';

/*******************************
SET UP EVENT HANDLER

- Select the element in which the event will happen 
- in this case is Roller Dice button
- class name = btn-roll
- addEventListern(event type, function will be called as soon as the event happen)
- the function shouldn't be in () in addEventListener
*/

function btn(){
	if(gamePlaying){
	//Do something here
	// 1. Random number
	//the dice
	//create random number
	//creating a math object
	var dice = Math.floor(Math.random()*6)+1;

	//2. Display the result to the correct name
	//write the name 'dice' then add the number of the dice
	//create a variable to select and store dice number
	var diceDOM = document.querySelector('.dice');
	//bring the style to block
	diceDOM.style.display = 'block';
	//to change the image element
	diceDOM.src = 'dice-'+dice+'.png';
	//now set the right number

//	document.


	//3. Update the round score IF the rolled number was not 1 
	//if the score is other than 1 then the score is added to his 
	//round score, if = 1 then it's the other player's turn
	if(dice !== 1){
		//add score
		roundScore += dice;
		//display it to user interface
		document.querySelector('#current-'+activePlayer).textContent = roundScore;
	}else{
		//next player
		nextPlayer();
	}}
}

function btn_hold(){
	if(gamePlaying){
	// Add CURRENT score to GLOBAL score
	scores[activePlayer] += roundScore;

	// Update the UI
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

	//check if player won the game
	if(scores[activePlayer] >= 20){
		document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying = false;
	}else{
		nextPlayer();
	}
	}
	//next player



/* My solution
	if(activePlayer === 0){
		//to display result
		scores[0] += roundScore;
		document.querySelector('#score-'+activePlayer).textContent = scores[0];
	}else{
		scores[1] += roundScore;
		document.querySelector('#score-'+activePlayer).textContent = scores[1];
	}
*/

}

function nextPlayer(){
	activePlayer === 0? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

function init(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');
	document.querySelector('.player-0-panel').classList.add('active');
	gamePlaying = true;
}

//this is to listen to buttons
document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-hold').addEventListener('click', btn_hold);
document.querySelector('.btn-new').addEventListener('click', init);
























