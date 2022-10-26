import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";
import canCastle from "./canCastle";

const possibleMoves = (piece: Bishop | King | Knight | Pawn | Queen | Rook, prop) => {
    /// Remove all of the cell highlights
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
    [...document.querySelectorAll('.selected')].map(e => e.classList.remove('selected'));

    const oppColor: string = prop.whiteTurn.current ? 'black' : 'white'
    
    let selectedCol: number = piece.coords[1];
    let selectedRow: number = piece.coords[0];
    let cell = document.querySelector(`[data-value="${selectedRow},${selectedCol}"]`)
    cell?.classList.add('selected')

    prop.curPiece.current = piece;
    
    /// We select a king, we check if the king can castle and push the new coords to the possible moves
    if (piece.type === 'king') {
        const newMoves = canCastle(prop);
        if (newMoves) {
            for (const i in newMoves) {
                piece.possibleMoves.push(newMoves[i]);
            }
        }
    }
    

    for (const i in piece.possibleMoves) {
        for (const j in piece.possibleMoves[i]) {

            let col = piece.possibleMoves[i][j][1];
            let row = piece.possibleMoves[i][j][0];

            /// Ensure we don't index past the bounds of the arrays
            if (row < 0 || row > 7) {
                break;
            } else if (col < 0 || col > 7) {
                break;
            }

            if (piece.type === 'pawn') {
                /// Iterate over all the possible attacks (only the 2 diagonals, 1 square ahead, by default)
                for (const i in piece.possibleAttacks) {
                    const row = piece.possibleAttacks[i][0][0];
                    const col = piece.possibleAttacks[i][0][1];
                    /// If there is a piece of the opposite color in the cell, we add a canTake attr to the cell
                    if (prop.chessBoard.cells[row][col] && prop.chessBoard.cells[row][col].color === oppColor) {
                        const cell = document.querySelector(`[data-value="${row},${col}"]`);
                        cell?.classList.add('canTake');
                    } else {
                        /// This is where we check for en passant
                        /// There is a function which already checks if en passant is allowed so we can use the en passant attr on the class to check the next move
                            try {
                                /// We check if the piece next to us is of the opposite color and if that piece has en passant available
                                /// If it does, we can set the corresponding cell to CanTake
                                let colorIndex: number = prop.whiteTurn.current ? -1 : 1;
                                if (prop.chessBoard.cells[row - (1 * colorIndex)][col].color === oppColor && 
                                    prop.chessBoard.cells[row - (1 * colorIndex)][col].enPassantAllowed)
                                {
                                    const passantRow = prop.chessBoard.cells[row - (1 * colorIndex)][col].coords[0];
                                    const passantCol = prop.chessBoard.cells[row - (1 * colorIndex)][col].coords[1];
                                    const cell = document.querySelector(`[data-value="${passantRow + (1 * colorIndex)},${passantCol}"]`);
                                    cell?.classList.add('canTake');
                                } 
                            } catch {
                            }
                    };
                };

                /// After checking all the possible attacks, we check all possible moves
                if (prop.chessBoard.cells[row][col] === null) {
                    const cell = document.querySelector(`[data-value="${row},${col}"]`)
                    cell?.classList.add('possibleMove')
                } else {
                    return;
                }
            }

            if (piece.type !== 'pawn' && prop.chessBoard.cells[row][col] === null) {
                const cell = document.querySelector(`[data-value="${row},${col}"]`);
                cell?.classList.add('possibleMove');
            } else if (piece.type !== 'pawn' && prop.chessBoard.cells[row][col].color === oppColor ){
                const cell = document.querySelector(`[data-value="${row},${col}"]`);
                cell?.classList.add('canTake');
                break;
            } else {
                break;
            }
        }
    }
}

export default possibleMoves;