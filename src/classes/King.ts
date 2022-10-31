class King {
    color: string;
    imgSrc: string;
    coords: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    possibleAttacks: number [][][];
    enPassantAllowed: boolean;
    hasMadeFirstMove: boolean;

    constructor (
        color: string,
        coords: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/king_' + color + '.png';
        this.coords = coords;
        this.key = key;
        this.type = 'king';
        this.hasMadeFirstMove = false;
        this.possibleMoves = [];
    }

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [[this.coords[0] - 1, this.coords[1]]],
            [[this.coords[0] + 1, this.coords[1]]],
            [[this.coords[0], this.coords[1] + 1]],
            [[this.coords[0], this.coords[1] - 1]]
        ];

        /// Remove any invalid moves. Moves that go out of the bounds of the board
        for (const i in this.possibleMoves) {
            for (const j in this.possibleMoves[i]) {
                if (this.possibleMoves[i][j][0] < 0 || this.possibleMoves[i][j][0] > 7) {
                    this.possibleMoves.splice(parseInt(i), 1);
                    break;
                }
            }
        }
    }

    checkPossibleMoves(prop) {
        // This needs looking at

        /// Add a castling move if we can castle
        if (!this.hasMadeFirstMove) {
            if (prop.chessBoard[`${this.color}Pieces`].pieces.rook[0] && 
                !prop.chessBoard[`${this.color}Pieces`].pieces.rook[0].hasMadeFirstMove) {
                    this.possibleMoves.push([[this.coords[0], this.coords[1] - 2]])
            }
            if (prop.chessBoard[`${this.color}Pieces`].pieces.rook[1] && 
            !prop.chessBoard[`${this.color}Pieces`].pieces.rook[1].hasMadeFirstMove) {
                this.possibleMoves.push([[this.coords[0], this.coords[1] + 2]])
            }
        }
        /// Check every move the king can make and see if it will put the king into check
        this.willBeInCheck(prop);

    };

    willBeInCheck(prop) {
        // We need to scan the board to see which pieces can take the king in it's current pos and every possible move the king has
        this.checkEachRowForAPiece(prop);
   
    }

    checkEachRowForAPiece(prop) {
        /// We need to create an array of all the moves we need to delete and then delete them after
        /// If we delete on the fly, we won't check every possible move
        let deletedMoves: number [][] = [];
        /// Scan all the way up and down the board, on each column, to see what pieces lie on the path
        /// If we find a Rook or Queen we need to remove this as a possible move for the king
        for (const i in this.possibleMoves) {
            for (const j in this.possibleMoves[i]) {
                let row: number = this.coords[0] - 1;
                let col: number = this.possibleMoves[i][j][1];

                /// Scan every row above the king
                while (row >= 0) {
                    if (prop.chessBoard.cells[row][col] !== null) {
                        if (prop.chessBoard.cells[row][col].type === 'rook' || 
                            prop.chessBoard.cells[row][col].type === 'queen') {
                                deletedMoves.push(this.possibleMoves[i][j]);
                                break;
                            } else {
                                break;
                            }
                    }
                    row--; 
                } 
                row = this.coords[0] + 1;
                /// Scan every row below the king
                while (row <= 7) {
                    if (prop.chessBoard.cells[row][col] !== null) {
                        if (prop.chessBoard.cells[row][col].type === 'rook' || 
                            prop.chessBoard.cells[row][col].type === 'queen') {
                                deletedMoves.push(this.possibleMoves[i][j]);
                                break;
                            } else {
                                break;
                            }
                    }
                    row++; 
                }
            }
        }


        /// Copy possibleMoves to ensure we iterate over every possible move
        const possibleMove = this.possibleMoves;
       
        /// Once we find the same coords, we delete it from the possible moves class
        for (const i in possibleMove) {
            for (const j in possibleMove[i]) {
                for (const k in deletedMoves) {
                    if (deletedMoves[k][0] === possibleMove[i][j][0]) {
                        if (deletedMoves[k][1] === possibleMove[i][j][1]) {
                            this.possibleMoves.splice(parseInt(i), 1);
                        }
                    }
                }
            }
        }
    }

    checkEachDiagonalForAPiece(prop, col: number) {
        let row: number = this.color === 'black' ? 0 : 7;
        const startingCol: number = col;
        const startingRow: number = row;

        /// Scan each diagonal individually to check for a Queen or Bishop on the path
        while (this.color === 'white' ? row >= 0 : row <= 7) {
            const cell = document.querySelector(`[data-value="${row},${col}"]`)
            cell?.classList.add('test')
            while (col >= 0) {
                const cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('test')
                if (prop.chessBoard.cells[row][col]) {
                    if (prop.chessBoard.cells[row][col].type === 'queen' ||
                        prop.chessBoard.cells[row][col].type === 'bishop') {
                            for (const i in this.possibleMoves) {
                                for (const j in this.possibleMoves[i]) {
                                    if (this.possibleMoves[i][j][1] === col) {
                                        this.possibleMoves.splice(parseInt(i), 1);
                                        return true;
                                    }
                                }
                            }
                        } else {
                            /// Break out of the loop once we find a piece and it isn't a Queen or Bishop
                            col = -1;
                        };
                };
                col--;
                /// Inc or dec row, depending on the color
                this.color === 'white' ? row-- : row++;
            };
            row = startingRow;
            col = startingCol;
            while (col <= 7) {
                const cell = document.querySelector(`[data-value="${row},${col}"]`)
                cell?.classList.add('test')
                if (prop.chessBoard.cells[row][col]) {
                    if (prop.chessBoard.cells[row][col].type === 'queen' ||
                        prop.chessBoard.cells[row][col].type === 'bishop') {
                            return true
                        } else {
                            col = 8
                    };
                };
                col ++;
                this.color === 'white' ? row-- : row++;
            }
            this.color === 'white' ? row = -1 : row = 8;
        }
        return false;
    }

    checkForKnightOnPath(prop, col: number) {
        let row: number = this.color === 'black' ? 0 : 7;
        // Check for a knight 2 rows up and either side of the column
        this.color === 'white' ? row -= 2 : row += 2;
        const cell = document.querySelector(`[data-value="${row},${col}"]`)
        cell?.classList.add('test')
        if (prop.chessBoard.cells[row][col + 1]) {
            return true;
        } else if (prop.chessBoard.cells[row][col - 1]) {
            return true;
        } 
        return false;
    };
}

export default King;