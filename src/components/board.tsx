import React, { useState } from "react";
import ChessBoard from "../classes/ChessBoard";

interface BoardProps {
    chessBoard: ChessBoard;
}
 
const Board: React.FC<BoardProps> = (prop) => {
    // Change state to force a re-render
    const [state, setState] = useState<boolean>(false);
    let boardCells: JSX.Element [] = [];
    const numberOfCells: number = 8;
    let key: number = 0;
    prop.chessBoard.updateBoard();

    const handleClick = (e) => {
        console.log(e.target.getAttribute('data-value'))
        prop.chessBoard.whitePieces.pieces.bishop[0].coord = [3, 4];
        state? setState(false) : setState(true)
    }   

    for (let i = 0; i < numberOfCells; i++) {
        for (let j = 0; j < numberOfCells; j++) {
            let whichClass: string = 'cell';
            let src: string = '';
            if (prop.chessBoard.cells[i][j] != null) {
                src = prop.chessBoard.cells[i][j].imgSrc;
            }


            // Check for odd or even using bitwise
            // If you OR a number by 1 and it's higher than itself, it is even
            if ((i | 1) > i) {
                if ((j | 1) > j) {
                    whichClass = `${whichClass} white`
                } else {
                    whichClass = `${whichClass} black`
                }
            } else {
                if ((j | 1) > j) {
                    whichClass = `${whichClass} black`
                } else {
                    whichClass = `${whichClass} white`
                }
            }

            const cell: JSX.Element = <div className={whichClass} data-value={key} key={key} onClick={(e) => {handleClick(e)}}>
                                        <img src={src} alt=''></img>
                                      </div>
            
            boardCells.push(cell);
            key += 1;
        }
    }
    return (
        <div className='chessBoard'>
            {boardCells}
        </div>
      );
}
 
export default Board;