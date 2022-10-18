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

    populateWhitePieces = () => {
        for (const i in this.whitePieces.pieces.rook) {
            const col = this.whitePieces.pieces.rook[i].coord[0];
            const row = this.whitePieces.pieces.rook[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.rook[i];
            this.whitePieces.pieces.rook[i].updatePossibleMoves();
        };

        for (const i in this.whitePieces.pieces.knight) {
            const col = this.whitePieces.pieces.knight[i].coord[0];
            const row = this.whitePieces.pieces.knight[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.knight[i];
            this.whitePieces.pieces.knight[i].updatePossibleMoves();
        };

        for (const i in this.whitePieces.pieces.bishop) {
            const col = this.whitePieces.pieces.bishop[i].coord[0];
            const row = this.whitePieces.pieces.bishop[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.bishop[i];
            this.whitePieces.pieces.bishop[i].updatePossibleMoves();
        };

        for (const i in this.whitePieces.pieces.pawn) {
            const col = this.whitePieces.pieces.pawn[i].coord[0];
            const row = this.whitePieces.pieces.pawn[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.pawn[i];
            this.whitePieces.pieces.pawn[i].updatePossibleMoves();
        }

        for (const i in this.whitePieces.pieces.king) {
            const col = this.whitePieces.pieces.king[i].coord[0];
            const row = this.whitePieces.pieces.king[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.king[i];
            this.whitePieces.pieces.king[i].updatePossibleMoves();
        }
        
        for (const i in this.whitePieces.pieces.queen) {
            const col = this.whitePieces.pieces.queen[i].coord[0];
            const row = this.whitePieces.pieces.queen[i].coord[1];
            this.cells[col][row] = this.whitePieces.pieces.queen[i];
            this.whitePieces.pieces.queen[i].updatePossibleMoves();
        }

    }

    populateBlackPieces = () => {
        for (const i in this.blackPieces.pieces.rook) {
            const col = this.blackPieces.pieces.rook[i].coord[0];
            const row = this.blackPieces.pieces.rook[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.rook[i];
            this.blackPieces.pieces.rook[i].updatePossibleMoves();
        };

        for (const i in this.blackPieces.pieces.knight) {
            const col = this.blackPieces.pieces.knight[i].coord[0];
            const row = this.blackPieces.pieces.knight[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.knight[i];
            this.blackPieces.pieces.knight[i].updatePossibleMoves();
        };

        for (const i in this.blackPieces.pieces.bishop) {
            const col = this.blackPieces.pieces.bishop[i].coord[0];
            const row = this.blackPieces.pieces.bishop[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.bishop[i];
            this.blackPieces.pieces.bishop[i].updatePossibleMoves();
        };

        for (const i in this.blackPieces.pieces.pawn) {
            const col = this.blackPieces.pieces.pawn[i].coord[0];
            const row = this.blackPieces.pieces.pawn[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.pawn[i];
            this.blackPieces.pieces.pawn[i].updatePossibleMoves();
        }

        for (const i in this.blackPieces.pieces.king) {
            const col = this.blackPieces.pieces.king[i].coord[0];
            const row = this.blackPieces.pieces.king[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.king[i];
            this.blackPieces.pieces.king[i].updatePossibleMoves();
        }

        for (const i in this.blackPieces.pieces.queen) {
            const col = this.blackPieces.pieces.queen[i].coord[0];
            const row = this.blackPieces.pieces.queen[i].coord[1];
            this.cells[col][row] = this.blackPieces.pieces.queen[i];
            this.blackPieces.pieces.queen[i].updatePossibleMoves();
        }
    }

    updateBoard = () => {
        this.resetBoard();
        this.populateBlackPieces();
        this.populateWhitePieces();
    }
}

export default ChessBoard;