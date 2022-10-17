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

    for (let i = 0; i < piece.possibleMoves.length; i++) {
        const col = piece.possibleMoves[i][0];
        const row = piece.possibleMoves[i][1];
        let cell = document.querySelector(`[data-value="${col},${row}"]`)
        cell?.classList.add('possibleMove')
    }

}

export default possibleMoves;