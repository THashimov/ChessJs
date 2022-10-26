import Board from './components/board';
import ChessBoard from './classes/ChessBoard';
import GameFlowControl from './classes/gameFlowControl';
import { useState } from 'react';


function App() {
  let chessBoard = new ChessBoard();
  let gameFlowControl = new GameFlowControl();
  const [resetGame, setResetGame] = useState(false);

  if (resetGame) {
      chessBoard = new ChessBoard();
      gameFlowControl = new GameFlowControl();
      setResetGame(false);
  }

  return (
    <div className="home">
      <Board chessBoard={chessBoard} gameFlowControl={gameFlowControl} resetGame={setResetGame}/>
    </div>
  );
}

export default App;
