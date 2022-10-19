const setPassantCheck = (prop) => {
    const row: number = prop.selectedPiece.current.coord[0];
    const col: number = prop.selectedPiece.current.coord[1];

    // Once we set en passant to be true. we could store the piece that triggered it, into prev piece
    // Now if prev piece changes, en passant is no longer possible
    // But how do we check that 
    if (prop.chessBoard.cells[row][col - 1] || prop.chessBoard.cells[row][col + 1]){
        if (row - 2 === 1 || row + 2 === 6) {
            try {
                prop.chessBoard.cells[row][col + 1].enPassantAllowed = true;
                prop.prevPiece.current = prop.selectedPiece.current;
            }
            catch {
                prop.chessBoard.cells[row][col - 1].enPassantAllowed = true;
                prop.prevPiece.current = prop.selectedPiece.current;
            }
        } 
    } else {
        prop.selectedPiece.current.enPassantAllowed = false;
    }
}

export default setPassantCheck;