import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const possibleMoves = (piece: Bishop | King | Knight | Pawn | Queen | Rook, prop) => {
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
    [...document.querySelectorAll('.selected')].map(e => e.classList.remove('selected'));

    const oppColor: string = prop.whiteTurn.current ? 'black' : 'white'

    let selectedCol: number = piece.coord[1];
    let selectedRow: number = piece.coord[0];

    let cell = document.querySelector(`[data-value="${selectedRow},${selectedCol}"]`)
    cell?.classList.add('selected')

    
    for (const i in piece.possibleMoves) {
        for (const j in piece.possibleMoves[i]) {

            let col = piece.possibleMoves[i][j][1];
            let row = piece.possibleMoves[i][j][0];

            // Ensure we don't index past the bounds of the arrays
            if (row < 0 || row > 7) {
                break;
            } else if (col < 0 || col > 7) {
                break;
            }

            if (piece.type === 'pawn') {
                if (prop.chessBoard.cells[row][col] === null) {
                    const cell = document.querySelector(`[data-value="${row},${col}"]`)
                    cell?.classList.add('possibleMove')
                } 

                for (const i in piece.possibleAttacks) {
                    const row = piece.possibleAttacks[i][0][0];
                    const col = piece.possibleAttacks[i][0][1];
                    if (prop.chessBoard.cells[row][col] && prop.chessBoard.cells[row][col].color === oppColor) {
                        const cell = document.querySelector(`[data-value="${row},${col}"]`);
                        cell?.classList.add('canTake');
                    } else {
                            try {
                                let colorIndex: number = prop.whiteTurn.current ? -1 : 1;
                                if (prop.chessBoard.cells[row - (1 * colorIndex)][col].color === oppColor && 
                                    prop.chessBoard.cells[row - (1 * colorIndex)][col].enPassantAllowed)
                                {
                                    const passantRow = prop.chessBoard.cells[row - (1 * colorIndex)][col].coord[0];
                                    const passantCol = prop.chessBoard.cells[row - (1 * colorIndex)][col].coord[1];
                                    const cell = document.querySelector(`[data-value="${passantRow + (1 * colorIndex)},${passantCol}"]`);
                                    cell?.classList.add('canTake');
                                } 
                            } catch {
                            }
                    };
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