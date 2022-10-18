import Bishop from "../classes/Bishop";
import ChessBoard from "../classes/ChessBoard";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const possibleMoves = (piece: Bishop | King | Knight | Pawn | Queen | Rook, chessBoard: ChessBoard) => {
    // Clear the board
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));

    // Bishop has 4 directions of movement
    // Once we hit a piece, we could break from this and check the next direction
    // How do we represent this?


    // Testing a deeper array
    // Possible moves is an array with 4 elements
    // Those 4 elements have 6 elements inside them
    // Those 6 elements hold a coord


    // Bishop is at [4, 7]

    // 

    for (let i = 0; i < piece.possibleMoves.length; i++) {
        for (let j = 0; j < piece.possibleMoves[i].length; j++) {

            let col = piece.possibleMoves[i][j][1];
            let row = piece.possibleMoves[i][j][0];

            // let cell = document.querySelector(`[data-value="${row},${col}"]`)
            // cell?.classList.add('yellow')

            console.log('col :', col);
            console.log('row :', row);

            if (row < 0 || row > 7) {
                break;
            } else if (col < 0 || col > 7) {
                break;
            }

            


            if (chessBoard.cells[row][col] === null) {
                let cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('possibleMove')
            } else if (chessBoard.cells[row][col].color === 'black'){
                let cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('yellow')
                break;
            }   

        }









        // let col = piece.possibleMoves[i][1] % 8;
        // let row = piece.possibleMoves[i][0] % 8;

        // if (row < 0) {
        //     continue;
        // };        
        // if (col < 0) {
        //     continue;
        // };

     
        

        // // if (row >= 0) {
        //     // let cell = document.querySelector(`[data-value="${row},${col}"]`)
        //     // cell?.classList.add('possibleMove')
        // // }
        // // console.log(col)

        // if (chessBoard.cells[row][col] === null) {
        //     let cell = document.querySelector(`[data-value="${row},${col}"]`)
        //     cell?.classList.add('possibleMove')
        // } else {
        //     continue;
        // }
    }

}

export default possibleMoves;