const movePiece = (e, prop) => {
    const col = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0];
    const row = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2];

    const coordClicked = [parseInt(col), parseInt(row)]
    prop.selectedPiece.current.coord = coordClicked;
    const pieceAttacked = prop.chessBoard.cells[coordClicked[0]][coordClicked[1]] ? prop.chessBoard.cells[coordClicked[0]][coordClicked[1]].type : '';

    if (prop.whiteTurn.current) {
        for (const i in prop.chessBoard.blackPieces.pieces[pieceAttacked]) {
            const coordOfOtherPiece = prop.chessBoard.blackPieces.pieces[pieceAttacked][i].coord;
            if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                delete prop.chessBoard.blackPieces.pieces[pieceAttacked][i];
            }
        }
    } else {
        for (const i in prop.chessBoard.whitePieces.pieces[pieceAttacked]) {
            const coordOfOtherPiece = prop.chessBoard.whitePieces.pieces[pieceAttacked][i].coord;
            if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
                delete prop.chessBoard.whitePieces.pieces[pieceAttacked][i];
            }
        }
    }
    
    if (prop.selectedPiece.current.type === 'pawn') {
        prop.selectedPiece.current.hasMadeFirstMove = true;
    }

    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
}

export default movePiece;