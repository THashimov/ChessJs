class Pawn {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    possibleAttacks: number [][][];
    hasMadeFirstMove: boolean;
    enPassantAllowed: boolean;
 
    constructor (
        color: string,
        coord: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/pawn_' + color + '.png';
        this.coord = coord;
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
                        [this.coord[0] - 1, this.coord[1]]
                    ] 
                ]
            } else {
                this.possibleMoves = 
                [
                    [
                        [this.coord[0] + 1, this.coord[1]]
                    ] 
                ]
            }
        } else {
            if (this.color === 'white') {
                this.possibleMoves =
                [
                    [
                        [this.coord[0] - 1, this.coord[1]]
                    ], 
                    [
                        [this.coord[0] - 2, this.coord[1]]
                    ]
                ];
            } else {
                this.possibleMoves = 
                [
                    [
                        [this.coord[0] + 1, this.coord[1]]
                    ], 
                    [
                        [this.coord[0] + 2, this.coord[1]]
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
                        [this.coord[0] - 1, this.coord[1] - 1]
                    ], 
                    [
                        [this.coord[0] - 1, this.coord[1] + 1]
                    ]
                ];
        } else {
            this.possibleAttacks = 
                [
                    [
                        [this.coord[0] + 1, this.coord[1] - 1]
                    ], 
                    [
                        [this.coord[0] + 1, this.coord[1] + 1]
                    ]
                ];
        }
    }
}

export default Pawn;