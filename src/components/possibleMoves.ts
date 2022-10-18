import Bishop from "../classes/Bishop";
import ChessBoard from "../classes/ChessBoard";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const possibleMoves = (piece: Bishop | King | Knight | Pawn | Queen | Rook, chessBoard: ChessBoard) => {
    // Clear every possible move class
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));

    console.log(chessBoard.cells)
    // Show all possible moves.
   
    for (let i = 0; i < piece.possibleMoves.length; i++) {
        let col = piece.possibleMoves[i][1] % 8;
        let row = piece.possibleMoves[i][0] % 8;

        if (row < 0) {
            continue;
        };        
        if (col < 0) {
            continue;
        };


        // if (row >= 0) {
            // let cell = document.querySelector(`[data-value="${row},${col}"]`)
            // cell?.classList.add('possibleMove')
        // }
        // console.log(col)

        console.log(chessBoard.cells[col][row].color);


        if (chessBoard.cells[col][row]) {

            continue;
        } else {
            let cell = document.querySelector(`[data-value="${row},${col}"]`)
            cell?.classList.add('possibleMove')
        }
    }

}

export default possibleMoves;