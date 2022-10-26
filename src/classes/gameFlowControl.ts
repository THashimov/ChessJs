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
    reset: boolean;

    constructor() {
        this.curPiece = undefined;
        this.prevPiece = undefined;
        this.whiteTurn = true;
        this.movesMade = 0;
        this.reset = false;
    }

    resetMoves() {
        this.movesMade = 0;
    }

    updateMoves() {
        this.movesMade++;
    }

    resetGame() {
        this.reset = true;
    }
}

export default GameFlowControl