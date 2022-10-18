import Board from './components/board';
import ChessBoard from './classes/ChessBoard';
import { useState } from 'react';

function App() {
  const chessBoard = new ChessBoard();
  
  return (
    <div className="home">
      <Board chessBoard={chessBoard} />
    </div>
  );
}

export default App;
