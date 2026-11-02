
import { useState } from "react";
import "./App.css";

function App() {
  // Store 9 empty cells
  const [board, setBoard] = useState(Array(9).fill(""));

  // Store current player
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Store winner
  const [winner, setWinner] = useState(null);

  // Winning combinations
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Handle cell click
  const handleClick = (index) => {

    // Prevent clicking filled cells or after game ends
    if (board[index] !== "" || winner) {
      return;
    }

    // Create updated board
    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    // Check winner
    const hasWon = winningPatterns.some((pattern) =>
      pattern.every((position) =>
        newBoard[position] === currentPlayer
      )
    );

    if (hasWon) {
      setWinner(currentPlayer);
    } 
    else if (newBoard.every((cell) => cell !== "")) {
      setWinner("Draw");
    } 
    else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Restart game
  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe Game</h1>

      <h3>
        {winner
          ? winner === "Draw"
            ? "Game Draw!"
            : `Winner: ${winner}`
          : `Current Player: ${currentPlayer}`}
      </h3>

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
