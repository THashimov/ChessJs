import setEnPassant from "./setEnPassant";

const movePiece = (e, prop) => {
    const col = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0];
    const row = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2];

    let coordClicked = [parseInt(col), parseInt(row)]
    const pieceAttacked = prop.chessBoard.cells[coordClicked[0]][coordClicked[1]] ? prop.chessBoard.cells[coordClicked[0]][coordClicked[1]].type : '';

    prop.selectedPiece.current.coord = coordClicked;


    // Maybe we can tidy this up a little as it's hard to follow
    if (prop.whiteTurn.current) {
        if (prop.selectedPiece.current.enPassantAllowed) {
            coordClicked[0] += 1;
            for (const i in prop.chessBoard.blackPieces.pieces.pawn) {
                const coordOfOtherPiece = prop.chessBoard.blackPieces.pieces.pawn[i].coord;
                if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                    delete prop.chessBoard.blackPieces.pieces.pawn[i];
                }
            }
            coordClicked[0] -= 1;
        }
        for (const i in prop.chessBoard.blackPieces.pieces[pieceAttacked]) {
            const coordOfOtherPiece = prop.chessBoard.blackPieces.pieces[pieceAttacked][i].coord;
            if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                delete prop.chessBoard.blackPieces.pieces[pieceAttacked][i];
            }
        }
    } else {
        if (prop.selectedPiece.current.enPassantAllowed) { 
            coordClicked[0] -= 1;
            for (const i in prop.chessBoard.whitePieces.pieces.pawn) {
                const coordOfOtherPiece = prop.chessBoard.whitePieces.pieces.pawn[i].coord;
                if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                    delete prop.chessBoard.whitePieces.pieces.pawn[i];
                }
            }
            coordClicked[0] += 1;
        } 
        for (const i in prop.chessBoard.whitePieces.pieces[pieceAttacked]) {
            const coordOfOtherPiece = prop.chessBoard.whitePieces.pieces[pieceAttacked][i].coord;
            if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                delete prop.chessBoard.whitePieces.pieces[pieceAttacked][i];
            }
        }
    }
    
    // if (prop.selectedPiece.current.type === 'pawn') {
    //     prop.selectedPiece.current.hasMadeFirstMove = true;
    // }

    setEnPassant(prop);

    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
    [...document.querySelectorAll('.selected')].map(e => e.classList.remove('selected'));
}

export default movePiece;