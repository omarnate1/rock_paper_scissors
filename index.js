function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Usage example to the console
// const computerChoice = getComputerChoice();
// console.log(`Computer's choice:`, computerChoice);

function playRound(playerSelection, computerSelection) {
  // Convert playerSelection and computerSelection to lowercase for case-insensitivity
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Validating playerSelection
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return 'Invalid choice. Please choose "rock", "paper", or "scissors".';
  }

  // Determine the round winner
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Usage example to the console
// const playerChoice = 'rock';
// const computerChoice = getComputerChoice();
// console.log(playRound(playerChoice, computerChoice));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt(
      `Round ${round}: Choose "rock", "paper", or "scissors":`
    );

    const result = playRound(playerChoice, computerChoice);
    console.log(result);

    if (result.includes("You win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }

  console.log(
    `Final score - Player: ${playerScore}, Computer: ${computerScore}`
  );
}

game();
