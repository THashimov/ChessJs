import React, { useState } from "react";
import ChessBoard from "../classes/ChessBoard";
import getCoordsOfClick from "./getCoordsOfClick";
import getPieceClicked from "./getPieceClicked";
import Piece from '../classes/Pieces'
import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

interface BoardProps {
    chessBoard: ChessBoard;
}
 
const Board: React.FC<BoardProps> = (prop) => {
    // Change state to force a re-render
    const [state, setState] = useState<boolean>(false);
    let boardCells: JSX.Element [][] = [];
    const numberOfCells: number = 8;
    let key: number = 0;
    prop.chessBoard.updateBoard();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, src: string ) => {
        const coordsClicked: number [] = getCoordsOfClick(e, src);
        const pieceClicked: Bishop | King | Knight | Pawn | Queen | Rook | null = 
        getPieceClicked(src, coordsClicked, prop.chessBoard.whitePieces.pieces);
        if (pieceClicked) {
            if (pieceClicked.type == 'pawn') {
                const key: number = pieceClicked.key;
                prop.chessBoard.whitePieces.pieces.pawn[key].coord[0] -= 1;

            }
            prop.chessBoard.updateBoard();
        }

        state? setState(false) : setState(true)
    }   

    for (let i = 0; i < numberOfCells; i++) {
        let rowCells: JSX.Element [] = []
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

            const cell: JSX.Element = 
                <div className={whichClass} data-value={[i, j]} key={key} onClick={(e) => {handleClick(e, src)}}>
                    <img src={src} alt=''></img>
                </div>
            
            rowCells.push(cell);
            key += 1;
        }
        boardCells.push(rowCells);
    }
    return (
        <div className='chessBoard'>
            {boardCells}
        </div>
      );
}
 
export default Board;