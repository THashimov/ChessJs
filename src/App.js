import Board from './components/board';
import ChessBoard from './classes/ChessBoard';
import { useRef } from 'react';
import GameFlowControl from './classes/gameFlowControl';

function App() {
  const chessBoard = new ChessBoard();
  const gameFlowControl = new GameFlowControl();
  
  return (
    <div className="home">
      <Board chessBoard={chessBoard} gameFlowControl={gameFlowControl}/>
    </div>
  );
}

export default App;
