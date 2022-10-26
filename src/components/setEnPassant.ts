const setPassantCheck = (prop) => {
    /// When en passant is allowed, the piece is saved in prevPiece. So if prevPiece is empty, we skip this
    if (prop.gameFlowControl.prevPiece) {
        const colorOfPiece = prop.gameFlowControl.prevPiece.color === 'black' ? 'blackPieces' : 'whitePieces';

        /// After a piece is moved & there is a prevPiece, we run this block
        /// This iterates over all of the pieces and sets en passant to be false so we can't en passant later
        for (const i in prop.chessBoard[colorOfPiece].pieces.pawn) {
            if (prop.chessBoard[colorOfPiece].pieces.pawn[i].key === prop.gameFlowControl.prevPiece.key) {
                prop.gameFlowControl.prevPiece.enPassantAllowed = false;
                prop.gameFlowControl.prevPiece = undefined;
                break;
            }
        }
    }


    const col = prop.gameFlowControl.curPiece.coords[1];
    const row = prop.gameFlowControl.curPiece.coords[0];

    /// This is where we set en passant
    /// We set the current piece to have en passant and then save it as the prevPiece
    if (prop.gameFlowControl.curPiece.type === 'pawn') {
        if (prop.gameFlowControl.curPiece.coords[0] === 3 || prop.gameFlowControl.curPiece.coords[0] === 4) {
            if (prop.gameFlowControl.curPiece.hasMadeFirstMove && (prop.chessBoard.cells[row][col - 1] || prop.chessBoard.cells[row][col + 1])) {
                try {
                    if (prop.chessBoard.cells[row][col - 1].type === 'pawn' &&
                        prop.chessBoard.cells[row][col - 1].color !== 
                        prop.gameFlowControl.curPiece.color) {
                            prop.gameFlowControl.curPiece.enPassantAllowed = true;
                            prop.gameFlowControl.prevPiece = prop.gameFlowControl.curPiece; 
                    }
                } catch {
                    if (prop.chessBoard.cells[row][col + 1].type === 'pawn' &&
                        prop.chessBoard.cells[row][col + 1].color !== 
                        prop.gameFlowControl.curPiece.color) {
                            prop.gameFlowControl.curPiece.enPassantAllowed = true;
                            prop.gameFlowControl.prevPiece = prop.gameFlowControl.curPiece; 
                    }
                } 
            }
        }
    prop.gameFlowControl.curPiece.hasMadeFirstMove = true;
    }
}

export default setPassantCheck;