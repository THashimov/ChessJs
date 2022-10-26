import React, { useRef, useState }  from "react";
import ChessBoard from "../classes/ChessBoard";
import getPieceClicked from "./getPieceClicked";
import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";
import possibleMoves from "./possibleMoves";
import movePiece from "./movePiece";
import setEnPassant from "./setEnPassant";
import presetBoard from "./presetBoard";
import GameFlowControl from "../classes/gameFlowControl";
import Draw from "./draw";

interface BoardProps {
    chessBoard: ChessBoard;
    gameFlowControl: GameFlowControl;
    resetGame: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Board: React.FC<BoardProps> = (prop) => {
    // Change state to force a re-render
    const [state, setState] = useState<boolean>(false);
    const [showDrawMenu, setShowDrawMenu] = useState<boolean>(false);
    // presetBoard(prop);

    let boardCells: JSX.Element [][] = [];
    const numberOfCells: number = 8;
    let key: number = 0;
    prop.chessBoard.updateBoard();

    if (prop.gameFlowControl.movesMade === 50) {
        setShowDrawMenu(true);
        prop.gameFlowControl.movesMade++;
    }
    
    const handleClick = (e, src: string ) => {
        const coordsClicked: number [] = 
        [
        e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0],
        e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2]
        ];

        const pieceClicked: Bishop | King | Knight | Pawn | Queen | Rook | null =
        prop.gameFlowControl.whiteTurn ? 
        getPieceClicked(src, coordsClicked, prop.chessBoard.whitePieces.pieces) :
        getPieceClicked(src, coordsClicked, prop.chessBoard.blackPieces.pieces);

        if (pieceClicked) {
            possibleMoves(pieceClicked, prop);
        } else if (
            e.target.className.includes('possibleMove') || 
            e.target.parentNode.className.includes('canTake') ||
            e.target.className.includes('canTake')) {
            movePiece(e, prop)
            prop.gameFlowControl.whiteTurn ? prop.gameFlowControl.whiteTurn = false : prop.gameFlowControl.whiteTurn = true;
            setEnPassant(prop);
        }

        state ? setState(false) : setState(true)
    };

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
    };

    return (
        <div className='chessBoard'>
            {showDrawMenu && <Draw resetGame={prop.resetGame} drawMenu={setShowDrawMenu}/> }
            {boardCells}
        </div>
      );
}
 
export default Board;