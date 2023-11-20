let computerChoice;
let result;


function generateComputerChoice(){

  let randomNumber = Math.random() * 3;

    if (randomNumber >0 && randomNumber <=1){
       computerChoice ='stone';
    }
    else if (randomNumber >1 && randomNumber <=2){
    computerChoice = 'paper' ;
    
    }
    else if (randomNumber >=2){
      computerChoice ='scissor';
      
    }
}

