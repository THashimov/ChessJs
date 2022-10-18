import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const resetSelection = (pieces: {bishop: Bishop [], king: King [], knight: Knight [], pawn: Pawn [], queen: Queen [], rook: Rook []}) => {
    for (const i in pieces.bishop) {
        pieces.bishop[i].isSelected = false;
    };

     for (const i in pieces.king) {
        pieces.king[i].isSelected = false;
    };

    for (const i in pieces.knight) {
        pieces.knight[i].isSelected = false;
    };

    for (const i in pieces.pawn) {
        pieces.pawn[i].isSelected = false;
    };

    for (const i in pieces.queen) {
        pieces.queen[i].isSelected = false;
    };

    for (const i in pieces.rook) {
        pieces.rook[i].isSelected = false;
    }
}

export default resetSelection;