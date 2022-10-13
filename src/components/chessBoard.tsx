import React from 'react';

interface ChessBoardProps {
    
}
 
const ChessBoard: React.FC<ChessBoardProps> = () => {
    let boardCells: JSX.Element [] = [];
    const cells: number = 8;

    for (let i = 0; i < Math.pow(cells, 2); i++) {
        const cell = <div className='cell' key={i}></div>
        boardCells.push(cell);
    }


    return ( 
            <div className="chessBoard">
                {boardCells}
            </div>
        );
}
 
export default ChessBoard;