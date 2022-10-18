const getPieceClicked = (
    src: string, 
    coordsClicked: number [], 
    pieces
    ) => {
    if (src.includes('white')) {
        const row: number = coordsClicked[0];
        const col: number = coordsClicked[1];

        if (src.includes('bishop')) {
            for (const i in pieces.bishop) {
                if (pieces.bishop[i].coord[0] == row) {
                    if (pieces.bishop[i].coord[1] == col) {
                        pieces.bishop[i].isSelected = true;
                        return pieces.bishop[i];
                    }
                }
            }
        } else if (src.includes('king')) {
            for (const i in pieces.king) {
                if (pieces.king[i].coord[0] == row) {
                    if (pieces.king[i].coord[1] == col) {
                        pieces.king[i].isSelected = true;
                        return pieces.king[i];
                    }
                }
            }

        } else if (src.includes('knight')) {
            for (const i in pieces.knight) {
                if (pieces.knight[i].coord[0] == row) {
                    if (pieces.knight[i].coord[1] == col) {
                        pieces.knight[i].isSelected = true;
                        return pieces.knight[i];
                    }
                }
            }
        } else if (src.includes('pawn')) {
            for (const i in pieces.pawn) {
                if (pieces.pawn[i].coord[0] == row) {
                    if (pieces.pawn[i].coord[1] == col) {
                        pieces.pawn[i].isSelected = true;
                        return pieces.pawn[i];
                    }
                }
            }
        } else if (src.includes('queen')) {
            for (const i in pieces.queen) {
                if (pieces.queen[i].coord[0] == row) {
                    if (pieces.queen[i].coord[1] == col) {
                        pieces.queen[i].isSelected = true;
                        return pieces.queen[i];
                    }
                }
            }

        } else if (src.includes('rook')) {
            for (const i in pieces.rook) {
                if (pieces.rook[i].coord[0] == row) {
                    if (pieces.rook[i].coord[1] == col) {
                        pieces.rook[i].isSelected = true;
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