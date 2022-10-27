const canCastle = (prop) => {
    let canCastleKingSide: boolean = false;
    let canCastleQueenSide: boolean = false;
    let moves: number [][][] = []

    const row = prop.gameFlowControl.curPiece.coords[0];
    let col = prop.gameFlowControl.curPiece.coords[1] - 1;

    if (!prop.gameFlowControl.curPiece.hasMadeFirstMove) {

        /// Scan left from king column to check for pieces
        while (col >= 0) {
            if (prop.chessBoard.cells[row][col] === null) {
            } else {
                if (prop.chessBoard.cells[row][col].type === 'rook' && !prop.chessBoard.cells[row][col].hasMadeFirstMove) {
                    canCastleQueenSide = true;
                    const row = prop.gameFlowControl.curPiece.coords[0];
                    const col = prop.gameFlowControl.curPiece.coords[1] - 2;
                    moves.push([[row, col]])
                    break;
                }
            }
            col--;
        }
    
        /// Then scan to the right 
        col = prop.gameFlowControl.curPiece.coords[1] + 1; 
        while (col <= 7) {
            if (prop.chessBoard.cells[row][col] === null) {
            } else {
                if (prop.chessBoard.cells[row][col].type === 'rook' && !prop.chessBoard.cells[row][col].hasMadeFirstMove) {
                    canCastleKingSide = true;
                    const row = prop.gameFlowControl.curPiece.coords[0];
                    const col = prop.gameFlowControl.curPiece.coords[1] + 2;
                    moves.push([[row, col]])
                    break;
                }
            }
            col++;
        }
    }
    
    return moves;
}

export default canCastle;