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

            // 5 4

            // 4 4
            // 6 4
            // 5 3
            // 5 5

            // col row

            // 4 4
            // 3 4
            // 5 4
            // 3 4
            // 3 5

            if (chessBoard.cells[row][col] === null) {
                let cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('possibleMove')
            } else if (chessBoard.cells[row][col].color === 'black'){
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