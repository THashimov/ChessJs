const canCastle = (prop) => {
    let canCastleKingSide: boolean = false;
    let canCastleQueenSide: boolean = false;

    if (!prop.curPiece.current.hasMadeFirstMove) {
        const row = prop.curPiece.current.coords[0];
        const kingCol = prop.curPiece.current.coords[1];
        for (const col in prop.chessBoard.cells[row]) {
            if (prop.chessBoard.cells[row][col]) {
                if (prop.chessBoard.cells[row][col].type !== 'rook' &&
                    prop.chessBoard.cells[row][col].type !== 'king') {
                        break;
                } else {
                    if (prop.chessBoard.cells[row][col].type === 'king') {
                        continue;
                    } else if (!prop.chessBoard.cells[row][col].hasMadeFirstMove) {
                        prop.chessBoard.cells[row][col].key === 0 ? canCastleQueenSide = true : canCastleKingSide = true;
                    }
                }
            } 
        }
    }

    if (canCastleQueenSide && !canCastleKingSide) {
        const row = prop.curPiece.current.coords[0];
        const col = prop.curPiece.current.coords[1] - 2;
        return [[row, col]]
    } else if (canCastleKingSide && !canCastleQueenSide) {
        const row = prop.curPiece.current.coords[0];
        const col = prop.curPiece.current.coords[1] + 2;
        return [[row, col]]
    } else if (canCastleKingSide && canCastleQueenSide){
        let moves: number [][][] = []
        let row = prop.curPiece.current.coords[0];
        let col = prop.curPiece.current.coords[1] - 2;
        moves.push([[row, col]])
        row = prop.curPiece.current.coords[0];
        col = prop.curPiece.current.coords[1] + 2;
        moves.push([[row, col]])
        return moves;
    } else {
        return null;
    }
}

export default canCastle;