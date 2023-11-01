document.addEventListener("DOMContentLoaded", function () {
  const resultDiv = document.getElementById("result-div");
  const scoreDiv = document.getElementById("score-div");

  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return "rock";
    } else if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      return 'Invalid choice. Please choose "rock", "paper", or "scissors".';
    }

    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  function displayResult(result) {
    const resultText = document.createElement("p");
    resultText.textContent = result;
    resultDiv.appendChild(resultText);
    updateScore();
  }

  function updateScore() {
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
      announceWinner("Player");
    } else if (computerScore === 5) {
      announceWinner("Computer");
    }
  }

  function announceWinner(winner) {
    clearResults();
    const winnerText = document.createElement("p");
    winnerText.textContent = `${winner} wins the game!`;
    resultDiv.appendChild(winnerText);
    disableButtons(); // Disable the buttons when the game is over
  }

  function clearResults() {
    resultDiv.innerHTML = "";
  }

  function disableButtons() {
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
  }

  document.getElementById("rock-button").addEventListener("click", function () {
    if (playerScore < 5 && computerScore < 5) {
      const playerChoice = "rock";
      const computerChoice = getComputerChoice();
      const result = playRound(playerChoice, computerChoice);
      displayResult(result);
    }
  });

  document
    .getElementById("paper-button")
    .addEventListener("click", function () {
      if (playerScore < 5 && computerScore < 5) {
        const playerChoice = "paper";
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        displayResult(result);
      }
    });

  document
    .getElementById("scissors-button")
    .addEventListener("click", function () {
      if (playerScore < 5 && computerScore < 5) {
        const playerChoice = "scissors";
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        displayResult(result);
      }
    });
});
