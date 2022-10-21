const setPassantCheck = (prop) => {
    // Reset en passant if enemy player moves
    if (prop.prevPiece.current && prop.prevPiece.current.enPassantAllowed) {
        const colorOfPiece = prop.prevPiece.current.color === 'black' ? 'blackPieces' : 'whitePieces';

        for (const i in prop.chessBoard[colorOfPiece].pieces.pawn) {
            if (prop.chessBoard[colorOfPiece].pieces.pawn[i].key === prop.prevPiece.current.key) {
                prop.prevPiece.current.enPassantAllowed = false;
                prop.prevPiece.current = undefined;
                break;
            }
        }
    }

    const col = prop.curPiece.current.coords[1];
    const row = prop.curPiece.current.coords[0];

    if (prop.curPiece.current.type === 'pawn') {
        if (prop.curPiece.current.coords[0] === 3 || prop.curPiece.current.coords[0] === 4) {
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
        }
    prop.curPiece.current.hasMadeFirstMove = true;
    }
}

export default setPassantCheck;