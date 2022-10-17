const possibleMoves = (piece) => {
    // Clear every possible move class
    [...document.querySelectorAll('.possibleMove')].map(e => e.classList.remove('possibleMove'));

       // if (pieceClicked.type == 'pawn') {
            //     const key: number = pieceClicked.key;
            //     prop.chessBoard.whitePieces.pieces.pawn[key].coord[0] -= 1;

            // }
            // prop.chessBoard.updateBoard();

        // Get 
        // const col = coordsClicked[0];
        // const row = coordsClicked[1];
        // let cell = document.querySelector(`[data-value="${col},${row}"]`)
        // cell?.classList.add('possibleMove')

        

        // This works on pawns

    if (piece.type === 'pawn') {
        const howFarCanMove = piece.coord[0] - piece.possibleMoves[0];

        for (let i = 0; i < howFarCanMove; i++) {
            const col = (piece.coord[0] - 1 ) - i;
            const row = piece.coord[1];

            let cell = document.querySelector(`[data-value="${col},${row}"]`)
            cell?.classList.add('possibleMove')
        }
    } else if (piece.type === 'king') {
        for (let i = 0; i < 4; i++) {
            
        }
    }
}

export default possibleMoves;