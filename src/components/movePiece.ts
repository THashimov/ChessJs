import Bishop from "../classes/Bishop";
import King from "../classes/King";
import Knight from "../classes/Knight";
import Pawn from "../classes/Pawn";
import Queen from "../classes/Queen";
import Rook from "../classes/Rook";

const movePiece = (e, pieces: {bishop: Bishop [], king: King [], knight: Knight [], pawn: Pawn [], queen: Queen [], rook: Rook []}) => {
    const col = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0];
    const row = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2];

    for (const i in pieces.bishop) {
        if (pieces.bishop[i].isSelected) {
            pieces.bishop[i].coord = [parseInt(col), parseInt(row)];
            pieces.bishop[i].updatePossibleMoves();
        };
    };
    for (const i in pieces.king) {
        if (pieces.king[i].isSelected) {
            pieces.king[i].coord = [parseInt(col), parseInt(row)];
            pieces.king[i].updatePossibleMoves();
        };
    };
    for (const i in pieces.knight) {
        if (pieces.knight[i].isSelected) {
            pieces.knight[i].coord = [parseInt(col), parseInt(row)];
            pieces.knight[i].updatePossibleMoves();
        };
    };
    for (const i in pieces.pawn) {
        if (pieces.pawn[i].isSelected) {
            pieces.pawn[i].coord = [parseInt(col), parseInt(row)];
            pieces.pawn[i].hasMadeFirstMove = true;
            pieces.pawn[i].updatePossibleMoves();
        };
    };
    for (const i in pieces.queen) {
        if (pieces.queen[i].isSelected) {
            pieces.queen[i].coord = [parseInt(col), parseInt(row)];
            pieces.queen[i].updatePossibleMoves();
        };
    };
    for (const i in pieces.rook) {
        if (pieces.rook[i].isSelected) {
            pieces.rook[i].coord = [parseInt(col), parseInt(row)];
            pieces.rook[i].updatePossibleMoves();
        };
    };

    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
}

export default movePiece;