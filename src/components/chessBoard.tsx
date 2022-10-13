import React from 'react';
import ChessPieces from './pieces.json';

interface ChessBoardProps {
    
}
 
const ChessBoard: React.FC<ChessBoardProps> = () => {
    let boardCells: JSX.Element [] = [];
    const cells: number = 8;

    const handleClick = (key) => {
        console.log(key)
    }   

    for (let i = 0; i < Math.pow(cells, 2); i++) {
        let src: string = '';
        
        switch (true) {
            case (i === 0 || i === 7):
                src = ChessPieces.rookBlack;
                break;
            case(i === 1 || i === 6):
                src = ChessPieces.knightBlack;
                break;
            case(i === 2 || i === 5):
                src = ChessPieces.bishopBlack;
                break;
            case(i === 3):
                src = ChessPieces.queenBlack;
                break;
            case(i === 4):
                src = ChessPieces.kingBlack;
                break;
            case(i >= 8 && i <= 15):
                src = ChessPieces.pawnBlack;
                break;
            case(i >= 48 && i <= 55):
                src = ChessPieces.pawnWhite;
                break;
            case(i === 56 || i === 63):
                src = ChessPieces.rookWhite;
                break;
            case(i === 57 || i === 62):
                src = ChessPieces.knightWhite;
                break;
            case(i === 58 || i === 61):
                src = ChessPieces.bishopWhite;
                break;
            case(i === 59):
                src = ChessPieces.queenWhite;
                break;
            case(i === 60):
                src = ChessPieces.kingWhite;
                break;
        }

        const cell: JSX.Element = <div className='cell' key={i} onClick={() => {handleClick(i)}}>
            <img src={src} alt=''></img>
        </div>
        boardCells.push(cell);
    }


    return ( 
            <div className="chessBoard">
                {boardCells}
            </div>
        );
}
 
export default ChessBoard;