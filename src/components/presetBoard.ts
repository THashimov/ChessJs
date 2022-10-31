const presetBoard = (prop) => {

    const castleWhite = () => {
        delete prop.chessBoard.whitePieces.pieces.queen[0];
        delete prop.chessBoard.whitePieces.pieces.knight[0];
        delete prop.chessBoard.whitePieces.pieces.knight[1];
        delete prop.chessBoard.whitePieces.pieces.bishop[0];
        delete prop.chessBoard.whitePieces.pieces.bishop[1];    
        prop.chessBoard.blackPieces.pieces.rook[0].coords = [2, 4];
        // prop.chessBoard.blackPieces.pieces.rook[1].coords = [5, 5];
        // prop.chessBoard.blackPieces.pieces.queen[0].coords = [2, 3];
        prop.chessBoard.blackPieces.pieces.rook[1].coords = [6, 5];

        // prop.chessBoard.blackPieces.pieces.knight[0].coords = [5, 4];
        // prop.chessBoard.blackPieces.pieces.bishop[0].coords = [5, 3];

        // delete prop.chessBoard.blackPieces.pieces.knight[1];
        // delete prop.chessBoard.blackPieces.pieces.bishop[0];
        // delete prop.chessBoard.blackPieces.pieces.bishop[1];

        delete prop.chessBoard.whitePieces.pieces.pawn[3];
        // delete prop.chessBoard.whitePieces.pieces.rook[0];

        delete prop.chessBoard.whitePieces.pieces.pawn[4];
        delete prop.chessBoard.whitePieces.pieces.pawn[5];

        // prop.chessBoard.whitePieces.pieces.king[0].coords = [4, 4];
        // prop.chessBoard.whitePieces.pieces.king[0].hasMadeFirstMove = true;


    }

    const castleBlack = () => {
        delete prop.chessBoard.blackPieces.pieces.queen[0];
        delete prop.chessBoard.blackPieces.pieces.knight[0];
        delete prop.chessBoard.blackPieces.pieces.knight[1];
        delete prop.chessBoard.blackPieces.pieces.bishop[0];
        delete prop.chessBoard.blackPieces.pieces.bishop[1];    
        prop.chessBoard.whitePieces.pieces.rook[0].coords = [3, 3];
        prop.chessBoard.whitePieces.pieces.rook[1].coords = [3, 5];

        prop.chessBoard.whitePieces.pieces.bishop[0].coords = [2, 4];

        delete prop.chessBoard.blackPieces.pieces.pawn[3];
        delete prop.chessBoard.blackPieces.pieces.pawn[5];

    }


    castleWhite();
    // castleBlack();
}

export default presetBoard;