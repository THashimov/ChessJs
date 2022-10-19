import Bishop from "../classes/Bishop";
import ChessBoard from "../classes/ChessBoard";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const possibleMoves = (piece: Bishop | King | Knight | Pawn | Queen | Rook, chessBoard: ChessBoard) => {
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));

    for (const i in piece.possibleMoves) {
        for (const j in piece.possibleMoves[i]) {

            let col = piece.possibleMoves[i][j][1];
            let row = piece.possibleMoves[i][j][0];

            if (row < 0 || row > 7) {
                break;
            } else if (col < 0 || col > 7) {
                break;
            }

            if (piece.type === 'pawn') {
                if (chessBoard.cells[row][col] === null) {
                    let cell = document.querySelector(`[data-value="${row},${col}"]`)
                    cell?.classList.add('possibleMove')
                } 
                for (const i in piece.possibleAttacks) {
                    let row = piece.possibleAttacks[i][0][0];
                    let col = piece.possibleAttacks[i][0][1];
                    if (chessBoard.cells[row][col] && chessBoard.cells[row][col].color === 'black') {
                        let cell = document.querySelector(`[data-value="${row},${col}"]`)
                        cell?.classList.add('canTake')
                    }
                }
            }

            if (piece.type !== 'pawn' && chessBoard.cells[row][col] === null) {
                let cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('possibleMove')
            } else if (piece.type !== 'pawn' && chessBoard.cells[row][col].color === 'black' ){
                let cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('canTake');
                break;
            } else {
                break;
            }
        }
    }
}

export default possibleMoves;