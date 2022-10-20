import Board from './components/board';
import ChessBoard from './classes/ChessBoard';
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const chessBoard = new ChessBoard();
  const curPiece = useRef(undefined);
  const prevPiece = useRef(undefined);
  const whiteTurn = useRef(true);
  
  return (
    <div className="home">
      <Board chessBoard={chessBoard} curPiece={curPiece} whiteTurn={whiteTurn} prevPiece={prevPiece}/>
    </div>
  );
}

export default App;
