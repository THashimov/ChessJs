class Knight {
    color: string;
    imgSrc: string;
    coords: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    possibleAttacks: number [][][];
    enPassantAllowed: boolean;

    constructor (
        color: string,
        coords: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/knight_' + color + '.png';
        this.coords = coords;
        this.key = key;
        this.type = 'knight';
    }

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [
                [this.coords[0] - 1, this.coords[1] + 2],
            ],
            [
                [this.coords[0] - 2, this.coords[1] + 1]
            ],
            [
                [this.coords[0] - 2, this.coords[1] - 1],
            ],
            [
                [this.coords[0] - 1, this.coords[1] - 2]
            ],
            [
                [this.coords[0] + 1, this.coords[1] - 2],
            ],
            [
                [this.coords[0] + 2, this.coords[1] - 1]
            ],
            [
                [this.coords[0] + 2, this.coords[1] + 1],
            ],
            [
                [this.coords[0] + 1, this.coords[1] + 2]
            ]
        ];
    }
}

export default Knight;