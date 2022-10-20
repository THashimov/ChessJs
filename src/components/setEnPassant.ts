const setPassantCheck = (prop) => {
    // Reset en passant if enemy player moves
    if (prop.prevPiece.current && prop.prevPiece.current.enPassantAllowed) {
        if (prop.prevPiece.current.color === 'black') {
            for (const i in prop.chessBoard.blackPieces.pieces.pawn) {
                if (prop.chessBoard.blackPieces.pieces.pawn[i].key === prop.prevPiece.current.key) {
                    prop.prevPiece.current.enPassantAllowed = false;
                }
            }
        } else {
            for (const i in prop.chessBoard.whitePieces.pieces.pawn) {
                if (prop.chessBoard.whitePieces.pieces.pawn[i].key === prop.prevPiece.current.key) {
                    prop.prevPiece.current.enPassantAllowed = false;
                }
            }
        }
    }

    const col = prop.curPiece.current.coord[1];
    const row = prop.curPiece.current.coord[0];

    // Check if there is a pawn next to the current pawn and set en passant if it is that pawns first move
    if (prop.curPiece.current.type === 'pawn') {
        if (!prop.curPiece.current.hasMadeFirstMove && (prop.chessBoard.cells[row][col - 1] || prop.chessBoard.cells[row][col + 1])) {
            try {
                if (prop.chessBoard.cells[row][col - 1].type === 'pawn' &&
                    prop.chessBoard.cells[row][col - 1].color !== 
                    prop.curPiece.current.color) {
                        prop.curPiece.current.enPassantAllowed = true;
                        prop.prevPiece.current = prop.curPiece.current; 
                }
            } catch {
                if (prop.chessBoard.cells[row][col + 1].type === 'pawn' &&
                    prop.chessBoard.cells[row][col + 1].color !== 
                    prop.curPiece.current.color) {
                        prop.curPiece.current.enPassantAllowed = true;
                        prop.prevPiece.current = prop.curPiece.current; 
                }
            }
        }
    prop.curPiece.hasMadeFirstMove = true;
    }
}

export default setPassantCheck;