const setPassantCheck = (prop) => {
    // If a pawn makes its first move and it lands next to a pawn of opposing color
    // Set that pawn to en passant true and set it's first move to be true

    // Now when we click on any pawn, it checks the pawns next to it to see if en passant is true
    // En passant is then reset so it cannot be triggered for that piece again.
    // To ensure it cannot be set again, we must check if first move has been made

    if (prop.selectedPiece.current.type === 'pawn') {
        
    }
}

export default setPassantCheck;