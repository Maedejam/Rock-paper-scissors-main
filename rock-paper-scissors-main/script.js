/*
Rock, Paper, Scissors
Use the shoot() function to play against the computer. Pass an number arguement for the desired move. 1=ROCK, 2=PAPER, 3=SCISSORS. Normal Rock, Paper, Scissors rules apply.
*/
console.log('What to play Rock, Paper, Scissors. Use the shoot() function. Moves: 1=ROCK, 2=PAPER, 3=SCISSORS.')

// HTML Elements
const $body = document.querySelector('body')
const $player = document.getElementById('player')
const $computer = document.getElementById('computer')
const $outcome = document.getElementById('outcome')

// Move Constants
const ROCK = 1
const PAPER = 2
const SCISSORS = 3

const shoot = function(player){
    const computer = Math.trunc(Math.random() * 3)+1
    $player.textContent = num(player)
    $computer.textContent = num(computer)

     return outcome(player,computer)
}

const num = function(num){
    if(num===ROCK){
        return 'Rock'
    }else if (num===PAPER) {
        return 'Paper'
    } else if(num===SCISSORS){
        return 'Scissors'
    }
}

const outcome = function(player , computer){
   switch(player){
    case ROCK:
        switch(computer){
            case ROCK:
                return same()
            case PAPER:
                return lose()
            case SCISSORS:
                return win()
        }
    case PAPER:
        switch(computer){
            case ROCK:
                return win()
            case PAPER:
                return same()
            case SCISSORS:
               return lose()
        }
    case SCISSORS:
        switch(computer){
            case ROCK:
                return lose()
            case PAPER:
                return win()
            case SCISSORS:
                return same()
        }
   } 
}


function lose(){
    $outcome.textContent = 'You LOSE!'
    $body.style.backgroundColor = 'red'
}

function win(){
    $outcome.textContent = 'You WIN!'
    $body.style.backgroundColor = 'green'
}

function same(){
    $outcome.textContent = 'You are the same!'
    $body.style.backgroundColor = 'white'
}