const movePiece = (e, prop) => {
    /// Get the clicked coords
    const row = parseInt(e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[0] : e.target.getAttribute('data-value')[0]);
    const col = parseInt(e.target.parentNode.getAttribute('data-value') ? e.target.parentNode.getAttribute('data-value')[2] : e.target.getAttribute('data-value')[2]);

    let coordClicked = [row, col]

    /// If we have moved a king and the king can castle, check if the move is a castling move or not
    if (prop.curPiece.current.type === 'king' && !prop.curPiece.current.hasMadeFirstMove) {
        const playerColor = prop.whiteTurn.current ? 'whitePieces' : 'blackPieces';

        if (col + 2 === prop.curPiece.current.coords[1]) {
            /// This means we have castled queen side
            prop.chessBoard[playerColor].pieces.rook[0].coords = [row, col + 1];
            prop.chessBoard[playerColor].pieces.rook[0].hasMadeFirstMove = true;
        } else if (col - 2 === prop.curPiece.current.coords[1]) {
            /// This means we have castled king side
            prop.chessBoard[playerColor].pieces.rook[1].coords = [row, col - 1];
            prop.chessBoard[playerColor].pieces.rook[1].hasMadeFirstMove = true;
        }
    }

    /// We check if the cell we clicked on is a canTake cell. If it isn't, we check the parent node as some cells have nested tags 
    const classOfCellClicked = e.target.classList.value.includes('canTake') ? e.target.classList.value : e.target.parentNode.classList.value;
    prop.curPiece.current.coords = coordClicked;


    if (classOfCellClicked.includes('canTake')) {
        /// If en passant is allowed then we change the coord clicked so we delete the pawn next to us
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
    };

    prop.prevPiece.current = undefined;
    prop.curPiece.current.hasMadeFirstMove = true;
    
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));
    [...document.querySelectorAll('.canTake')].map(e => e.classList.remove('canTake'));
    [...document.querySelectorAll('.selected')].map(e => e.classList.remove('selected'));
}

export default movePiece;