import Bishop from "./Bishop";
import King from './King';
import Knight from './Knight';
import Pawn from './Pawn';
import Queen from './Queen';
import Rook from './Rook';

class Pieces {
    pieces: {bishop: Bishop[], king: King, knight: Knight[], queen: Queen, rook: Rook [], pawn: Pawn[]};

    constructor (color: string){

        if (color === 'black') {
            const bishop: Bishop [] = [new Bishop(color, [0, 2], 0), new Bishop(color, [0, 5], 1)];
            const king: King = new King(color, [0, 4], 0);
            const knight: Knight [] = [new Knight(color, [0, 6], 0), new Knight(color, [0, 1], 1)];
            const queen: Queen = new Queen(color, [0, 3], 0);
            const rook: Rook [] = [new Rook(color, [0, 0], 0), new Rook(color, [0, 7], 1)];
            let pawn: Pawn [] = [];

            for (let i = 0; i < 8; i++) {
                pawn.push(new Pawn(color, [1, i], i))
            }

            this.pieces = {bishop, king, knight, queen, rook, pawn};

        } else if (color === 'white') {
            const bishop: Bishop [] = [new Bishop(color, [7, 2], 0), new Bishop(color, [7, 5], 1)];
            const king: King = new King(color, [7, 4], 0);
            const knight: Knight [] = [new Knight(color, [7, 6], 1), new Knight(color, [7, 1], 0)];
            const queen: Queen = new Queen(color, [7, 3], 0);
            const rook: Rook [] = [new Rook(color, [7, 0], 0), new Rook(color, [7, 7], 1)];
            let pawn: Pawn [] = [];

            for (let i = 0; i < 8; i++) {
                pawn.push(new Pawn(color, [6, i], i))
            }

            this.pieces = {bishop, king, knight, queen, rook, pawn};
        }
    }
}

export default Pieces;