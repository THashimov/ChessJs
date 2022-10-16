import React, { useRef } from 'react';
import ChessBoard from '../classes/ChessBoard';
import Pieces from '../classes/Pieces';
import Board from './board'

interface GameLogic {
    
}
 
const GameLogic: React.FC<GameLogic> = () => {
    const chessBoard = new ChessBoard();
    
    const board = <Board chessBoard={chessBoard}/>;

    console.log(board.props.chessBoard.whitePieces);

    return ( 
        <div className="game">
            {board}
        </div>
        );
}
 
export default GameLogic;