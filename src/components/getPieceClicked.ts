const getPieceClicked = (
    src: string, 
    coordsClicked: number [], 
    pieces
    ) => {
        const row: number = coordsClicked[0];
        const col: number = coordsClicked[1];

        if (src.includes('bishop')) {
            for (const i in pieces.bishop) {
                if (pieces.bishop[i].coords[0] == row) {
                    if (pieces.bishop[i].coords[1] == col) {
                        return pieces.bishop[i];
                    }
                }
            }
        } else if (src.includes('king')) {
            for (const i in pieces.king) {
                if (pieces.king[i].coords[0] == row) {
                    if (pieces.king[i].coords[1] == col) {
                        return pieces.king[i];
                    }
                }
            }

        } else if (src.includes('knight')) {
            for (const i in pieces.knight) {
                if (pieces.knight[i].coords[0] == row) {
                    if (pieces.knight[i].coords[1] == col) {
                        return pieces.knight[i];
                    }
                }
            }
        } else if (src.includes('pawn')) {
            for (const i in pieces.pawn) {
                if (pieces.pawn[i].coords[0] == row) {
                    if (pieces.pawn[i].coords[1] == col) {
                        return pieces.pawn[i];
                    }
                }
            }
        } else if (src.includes('queen')) {
            for (const i in pieces.queen) {
                if (pieces.queen[i].coords[0] == row) {
                    if (pieces.queen[i].coords[1] == col) {
                        return pieces.queen[i];
                    }
                }
            }

        } else if (src.includes('rook')) {
            for (const i in pieces.rook) {
                if (pieces.rook[i].coords[0] == row) {
                    if (pieces.rook[i].coords[1] == col) {
                        return pieces.rook[i];
                    }
                }
            }
        } else {
            return null
        }
}

export default getPieceClicked;