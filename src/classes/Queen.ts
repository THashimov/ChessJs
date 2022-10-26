class Queen {
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
        this.imgSrc = '/assets/queen_' + color + '.png';
        this.coords = coords;
        this.key = key;
        this.type = 'queen';
    };

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [
                [this.coords[0] + 1, this.coords[1]],
                [this.coords[0] + 2, this.coords[1]],
                [this.coords[0] + 3, this.coords[1]],
                [this.coords[0] + 4, this.coords[1]],
                [this.coords[0] + 5, this.coords[1]],
                [this.coords[0] + 6, this.coords[1]],
                [this.coords[0] + 7, this.coords[1]]
            ],
            [
            [this.coords[0] - 1, this.coords[1]],
            [this.coords[0] - 2, this.coords[1]],
            [this.coords[0] - 3, this.coords[1]],
            [this.coords[0] - 4, this.coords[1]],
            [this.coords[0] - 5, this.coords[1]],
            [this.coords[0] - 6, this.coords[1]],
            [this.coords[0] - 7, this.coords[1]]
            ],
            [
                [this.coords[0], this.coords[1] + 1],
                [this.coords[0], this.coords[1] + 2],
                [this.coords[0], this.coords[1] + 3],
                [this.coords[0], this.coords[1] + 4],
                [this.coords[0], this.coords[1] + 5],
                [this.coords[0], this.coords[1] + 6],
                [this.coords[0], this.coords[1] + 7]
            ],
            [
                [this.coords[0], this.coords[1] - 1],
                [this.coords[0], this.coords[1] - 2],
                [this.coords[0], this.coords[1] - 3],
                [this.coords[0], this.coords[1] - 4],
                [this.coords[0], this.coords[1] - 5],
                [this.coords[0], this.coords[1] - 6],
                [this.coords[0], this.coords[1] - 7]
            ],
            [
                [this.coords[0] - 1, this.coords[1] - 1],
                [this.coords[0] - 2, this.coords[1] - 2],
                [this.coords[0] - 3, this.coords[1] - 3],
                [this.coords[0] - 4, this.coords[1] - 4],
                [this.coords[0] - 5, this.coords[1] - 5],
                [this.coords[0] - 6, this.coords[1] - 6],
                [this.coords[0] - 7, this.coords[1] - 7]
            ],
            [
                [this.coords[0] + 1, this.coords[1] + 1],
                [this.coords[0] + 2, this.coords[1] + 2],
                [this.coords[0] + 3, this.coords[1] + 3],
                [this.coords[0] + 4, this.coords[1] + 4],
                [this.coords[0] + 5, this.coords[1] + 5],
                [this.coords[0] + 6, this.coords[1] + 6],
                [this.coords[0] + 7, this.coords[1] + 7]
            ],
            [
                [this.coords[0] - 1, this.coords[1] + 1],
                [this.coords[0] - 2, this.coords[1] + 2],
                [this.coords[0] - 3, this.coords[1] + 3],
                [this.coords[0] - 4, this.coords[1] + 4],
                [this.coords[0] - 5, this.coords[1] + 5],
                [this.coords[0] - 6, this.coords[1] + 6],
                [this.coords[0] - 7, this.coords[1] + 7]
            ],
            [
                [this.coords[0] + 1, this.coords[1] - 1],
                [this.coords[0] + 2, this.coords[1] - 2],
                [this.coords[0] + 3, this.coords[1] - 3],
                [this.coords[0] + 4, this.coords[1] - 4],
                [this.coords[0] + 5, this.coords[1] - 5],
                [this.coords[0] + 6, this.coords[1] - 6],
                [this.coords[0] + 7, this.coords[1] - 7]
            ]
        ];
    }
}

export default Queen;