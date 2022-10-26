const presetBoard = (prop) => {

    const castle = () => {
        delete prop.chessBoard.whitePieces.pieces.queen[0];
        delete prop.chessBoard.whitePieces.pieces.knight[0];
        delete prop.chessBoard.whitePieces.pieces.knight[1];
        delete prop.chessBoard.whitePieces.pieces.bishop[0];
        delete prop.chessBoard.whitePieces.pieces.bishop[1];    
        delete prop.chessBoard.blackPieces.pieces.queen[0];
        delete prop.chessBoard.blackPieces.pieces.knight[0];
        delete prop.chessBoard.blackPieces.pieces.knight[1];
        delete prop.chessBoard.blackPieces.pieces.bishop[0];
        delete prop.chessBoard.blackPieces.pieces.bishop[1];
    }


    castle();

}

export default presetBoard;