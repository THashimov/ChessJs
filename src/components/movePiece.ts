const movePiece = (e, selectedPiece, chessBoard) => {
    const col = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0];
    const row = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2];

    const coordClicked = [parseInt(col), parseInt(row)]
    selectedPiece.coord = coordClicked;

    const pieceAttacked = chessBoard.cells[coordClicked[0]][coordClicked[1]] ? chessBoard.cells[coordClicked[0]][coordClicked[1]].type : '';

    for (const i in chessBoard.blackPieces.pieces[pieceAttacked]) {
        const coordOfOtherPiece = chessBoard.blackPieces.pieces[pieceAttacked][i].coord;
        if (coordOfOtherPiece[0] === coordClicked[0] && coordOfOtherPiece[1] === coordClicked[1]) {
            delete chessBoard.blackPieces.pieces[pieceAttacked][i];
        }
    }
    
    if (selectedPiece.type === 'pawn') {
        selectedPiece.hasMadeFirstMove = true;
    }

    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
}

export default movePiece;