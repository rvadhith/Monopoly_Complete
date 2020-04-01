var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box8 = document.querySelector('#box8');
var box12 = document.querySelector('#box12');
var box16 = document.querySelector('#box16');
var box15 = document.querySelector('#box15');
var box14 = document.querySelector('#box14');
var box13 = document.querySelector('#box13');
var box9 = document.querySelector('#box9');
var box5 = document.querySelector('#box5');


var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
var arrdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5];

const player1_button = document.getElementById("player-1");

const player2_button = document.getElementById("player-2");

player1_button.addEventListener('click', rollDice_1);

player2_button.addEventListener('click', rollDice_2);

var player1 = ["Faceprep", 0, 1000];

var player2 = ["Prograd", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random()*6) + 1;
    console.log(position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if(p1 < board.length){
        updateMoney = player1[2] - board[p1 - 1];
    }
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

function rollDice_2() {
    let position2 = Math.floor(Math.random()*6) + 1;
    console.log(position2);
    changePosition_2(player2[1], position2);
}

function changePosition_2(old2, currentPos2) {
    var newPosition2 = old2 + currentPos2;
    player2[1] = newPosition2;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_2(p2) {
    var updateMoney2 = 0;
    if(p2 < board.length){
        updateMoney2 = player2[2] - board[p2 - 1];
    }
    else {
        p2 = p2 % 15;
        updateMoney2 = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney2);
}