const getPieceClicked = (src, coordsClicked, pieces) => {
    if (src.includes('white')) {
        const row = coordsClicked[0];
        const col = coordsClicked[1];

        if (src.includes('bishop')) {
            for (const i in pieces.bishop) {
                if (pieces.bishop[i].coord[0] == row) {
                    if (pieces.bishop[i].coord[1] == col) {
                        return pieces.bishop[i];
                    }
                }
            }
        } else if (src.includes('king')) {
            return pieces.king

        } else if (src.includes('knight')) {
            for (const i in pieces.knight) {
                if (pieces.knight[i].coord[0] == row) {
                    if (pieces.knight[i].coord[1] == col) {
                        return pieces.knight[i];
                    }
                }
            }
        } else if (src.includes('pawn')) {
            for (const i in pieces.pawn) {
                if (pieces.pawn[i].coord[0] == row) {
                    if (pieces.pawn[i].coord[1] == col) {
                        return pieces.pawn[i];
                    }
                }
            }
        } else if (src.includes('queen')) {
            return pieces.queen;

        } else if (src.includes('rook')) {
            for (const i in pieces.rook) {
                if (pieces.rook[i].coord[0] == row) {
                    if (pieces.rook[i].coord[1] == col) {
                        return pieces.rook[i];
                    }
                }
            }
        } else {
            return null
        }
    }
}

export default getPieceClicked;