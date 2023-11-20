// let computerChoice;
let result;


function generateComputerChoice() {

  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return 'stone';
  }
  else if (randomNumber > 1 && randomNumber <= 2) {
    return 'paper';

  }
  else if (randomNumber >= 2) {
    return 'scissor';

  }
}

function getResult(userMove, computerMove) {
  let resultMsg;
  if (userMove === 'stone') {
    if (computerMove === 'scissor') {
      return 'you won'
    }
    else if (computerMove === 'paper') {
      return 'you  loose'
    }

    else {
      return ' its tie'
    }

  }
  else if (userMove === 'paper') {
    if (computerMove === 'stone') {
      return 'you won'
    }
    else if (computerMove === 'scissor') {
      return 'you  loose'
    }

    else {
      return ' its tie'
    }
  }

  else {
    if (computerChoice === 'paper') {
      return 'you won'
    }
    else if (computerChoice === 'stone') {
      return 'you  loose'
    }

    else {
      return ' its tie'
    }


  }


}


function showResult(userMove, computerMove, result) {
  alert(`you have choosen ${userMove} computer choice is ${computerMove} so ${result}`);
}
