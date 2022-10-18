import Board from './components/board';
import ChessBoard from './classes/ChessBoard';
import { useRef } from 'react';

function App() {
  const chessBoard = new ChessBoard();
  const selectedPiece = useRef(undefined);
  
  return (
    <div className="home">
      <Board chessBoard={chessBoard} selectedPiece={selectedPiece}/>
    </div>
  );
}

export default App;
