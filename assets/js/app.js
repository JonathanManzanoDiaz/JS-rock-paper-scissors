const game = () => {
  let pScore = 0;
  let cScore = 0;

  // START THE GAME
  const startGame = () => {
    const playBtn = document.querySelector(".play");
    const introScreen = document.querySelector(".intro1");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // PLAY MATCH
  const playMatch = () => {
    const options = document.querySelectorAll(".opBtn");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          // Update Images
          playerHand.src = `./assets/images/${this.textContent}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
        }, 1500);
        //ANIMATIOn
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //UPDATE TEXT
    const winner = document.querySelector(".textWin");
    // CHECKING FOR A TIE
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }
    if (playerChoice == "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent("Computer Wins!");
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice == "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent("Player Wins!");
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice == "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent("Player Wins!");
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all inner function
  startGame();
  playMatch();
};
game();
