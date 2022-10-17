import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Pieces from "./Pieces";
import Queen from "./Queen";
import Rook from "./Rook";

class ChessBoard {
    cells: Bishop | King | Knight | Pawn | Queen | Rook | null [][];
    whitePieces: Pieces;
    blackPieces: Pieces;

    constructor() {
        this.cells = [];
        this.whitePieces = new Pieces('white');
        this.blackPieces = new Pieces('black');

        // Init the whole board as null
        for (let i = 0; i < 8; i++){
            let arr: any [] = [];

            for (let j = 0; j < 8; j++) {
                arr.push(null)
            }
            this.cells.push(arr);
        }
    }

    resetBoard = () => {
        this.cells = [];

        // Init the whole board as null
        for (let i = 0; i < 8; i++){
            let arr: any [] = [];

            for (let j = 0; j < 8; j++) {
                arr.push(null)
            }
            this.cells.push(arr);
        }
    }

    updateBoard = () => {
        this.resetBoard();
        for (let i = 0; i < 2; i++) {
            let col = this.blackPieces.pieces.rook[i].coord[0];
            let row = this.blackPieces.pieces.rook[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.rook[i];
            col = this.blackPieces.pieces.knight[i].coord[0];
            row = this.blackPieces.pieces.knight[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.knight[i];
            col = this.blackPieces.pieces.bishop[i].coord[0];
            row = this.blackPieces.pieces.bishop[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.bishop[i];

            col = this.whitePieces.pieces.rook[i].coord[0];
            row = this.whitePieces.pieces.rook[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.rook[i];
            col = this.whitePieces.pieces.knight[i].coord[0];
            row = this.whitePieces.pieces.knight[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.knight[i];
            col = this.whitePieces.pieces.bishop[i].coord[0];
            row = this.whitePieces.pieces.bishop[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.bishop[i];
        }

        for (let i = 0; i < 8; i++) {
            let col = this.blackPieces.pieces.pawn[i].coord[0];
            let row = this.blackPieces.pieces.pawn[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.pawn[i];
            col = this.whitePieces.pieces.pawn[i].coord[0];
            row = this.whitePieces.pieces.pawn[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.pawn[i];
        }

        let col = this.whitePieces.pieces.king.coord[0];
        let row = this.whitePieces.pieces.king.coord[1];
        this.cells[col][row] = this.whitePieces.pieces.king;
        col = this.whitePieces.pieces.queen.coord[0];
        row = this.whitePieces.pieces.queen.coord[1];
        this.cells[col][row] = this.whitePieces.pieces.queen;

        col = this.blackPieces.pieces.king.coord[0];
        row = this.blackPieces.pieces.king.coord[1];
        this.cells[col][row] = this.blackPieces.pieces.king;
        col = this.blackPieces.pieces.queen.coord[0];
        row = this.blackPieces.pieces.queen.coord[1];
        this.cells[col][row] = this.blackPieces.pieces.queen;
    }

}

export default ChessBoard;