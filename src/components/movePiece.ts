const movePiece = (e, prop) => {
    const col = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0];
    const row = e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2];

    let coordClicked = [parseInt(col), parseInt(row)]
    prop.curPiece.current.coord = coordClicked;
    const classOfCellClicked = e.target.classList.value.includes('canTake') ? e.target.classList.value : e.target.parentNode.classList.value;

    if (classOfCellClicked.includes('canTake')) {
        if (prop.prevPiece.current && prop.prevPiece.current.enPassantAllowed) {
            prop.whiteTurn.current ? coordClicked[0] += 1 : coordClicked[0] -= 1;
        } 

        const typeOfPieceAttacked: string = prop.chessBoard.cells[coordClicked[0]][coordClicked[1]].type;
        const keyOfPieceAttacked: number = prop.chessBoard.cells[coordClicked[0]][coordClicked[1]].key;
        const colorOfPieceAttacked: string = prop.chessBoard.cells[coordClicked[0]][coordClicked[1]].color === 'black' ? 'blackPieces' : 'whitePieces';

        for (const piece in prop.chessBoard[colorOfPieceAttacked].pieces[typeOfPieceAttacked]) {
            if (prop.chessBoard[colorOfPieceAttacked].pieces[typeOfPieceAttacked][piece].key === keyOfPieceAttacked) {
                delete prop.chessBoard[colorOfPieceAttacked].pieces[typeOfPieceAttacked][piece]
            };
        }

        if (prop.prevPiece.current && prop.prevPiece.current.enPassantAllowed) {
            prop.whiteTurn.current ? coordClicked[0] -= 1 : coordClicked[0] += 1;
        } 
    }

    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
    [...document.querySelectorAll('.selected')].map(e => e.classList.remove('selected'));
}

export default movePiece;