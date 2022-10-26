import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Rook from "./Rook";

class GameFlowControl {
    curPiece: undefined | Bishop | King | Knight | Pawn | Queen | Rook;
    prevPiece: undefined | Bishop | King | Knight | Pawn | Queen | Rook;
    whiteTurn: boolean;
    movesMade: number;

    constructor() {
        this.curPiece = undefined;
        this.prevPiece = undefined;
        this.whiteTurn = true;
        this.movesMade = 49;
    }

    resetMoves() {
        this.movesMade = 0;
    }

    updateMoves() {
        this.movesMade++;
    }
}

export default GameFlowControl