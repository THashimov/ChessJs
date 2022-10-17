import React, { useRef, useState } from 'react';
import ChessBoard from '../classes/ChessBoard';
import Board from './board'

interface GameLogic {
    
}
 
const GameLogic: React.FC<GameLogic> = () => {
    const chessBoard = new ChessBoard();
    const board = <Board chessBoard={chessBoard}/>;

    return ( 
        <div className="game">
            {board}
        </div>
        );
}
 
export default GameLogic;