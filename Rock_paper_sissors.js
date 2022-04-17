const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
    return userInput;
    }else{
    return alert("Error!");
    }
    };
    
    const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber){
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
      }
    }
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice){
        return alert("The game is a tie!");
      }
      if (userChoice === "rock"){
        if (computerChoice === "paper"){
          return alert ("The computer Won!");
        }else{
          return alert ("you won!");
        }
    }
         if (userChoice === "paper"){
        if (computerChoice === "scissors"){
          return alert ("The computer Won!");
        }else{
          return alert("you won!");
        }
      }
          if (userChoice === "scissors"){
        if (computerChoice === "rock"){
          return alert( "The computer Won!");
        }else{
          return alert("you won!");
        }
        }
    }

    
    const playGame = () => {
        const userChoice = window.prompt("Pick rock paper or sissors");
        const computerChoice = getComputerChoice();
        alert('You threw: ' + userChoice);
        alert('The computer threw:' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
     };
      
         playGame();