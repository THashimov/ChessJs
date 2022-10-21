class Pawn {
    color: string;
    imgSrc: string;
    coords: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    possibleAttacks: number [][][];
    hasMadeFirstMove: boolean;
    enPassantAllowed: boolean;
 
    constructor (
        color: string,
        coords: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/pawn_' + color + '.png';
        this.coords = coords;
        this.key = key;
        this.type = 'pawn';
        this.hasMadeFirstMove = false;
        this.enPassantAllowed = false;
    };

    updatePossibleMoves() {
        this.updatePossibleAttacks();

        if (this.hasMadeFirstMove) {
            if (this.color === 'white') {
                this.possibleMoves = 
                [
                    [
                        [this.coords[0] - 1, this.coords[1]]
                    ] 
                ]
            } else {
                this.possibleMoves = 
                [
                    [
                        [this.coords[0] + 1, this.coords[1]]
                    ] 
                ]
            }
        } else {
            if (this.color === 'white') {
                this.possibleMoves =
                [
                    [
                        [this.coords[0] - 1, this.coords[1]]
                    ], 
                    [
                        [this.coords[0] - 2, this.coords[1]]
                    ]
                ];
            } else {
                this.possibleMoves = 
                [
                    [
                        [this.coords[0] + 1, this.coords[1]]
                    ], 
                    [
                        [this.coords[0] + 2, this.coords[1]]
                    ]
                ];
            }
          
        }
    }

    updatePossibleAttacks() {
        if (this.color === 'white') {
            this.possibleAttacks = 
                [
                    [
                        [this.coords[0] - 1, this.coords[1] - 1]
                    ], 
                    [
                        [this.coords[0] - 1, this.coords[1] + 1]
                    ]
                ];
        } else {
            this.possibleAttacks = 
                [
                    [
                        [this.coords[0] + 1, this.coords[1] - 1]
                    ], 
                    [
                        [this.coords[0] + 1, this.coords[1] + 1]
                    ]
                ];
        }
    }

    resetEnPassant() {
        this.enPassantAllowed = false;
    }
}

export default Pawn;