class Knight {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];

    constructor (
        color: string,
        coord: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/knight_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'knight';
    }

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [
                [this.coord[0] - 1, this.coord[1] + 2],
            ],
            [
                [this.coord[0] - 2, this.coord[1] + 1]
            ],
            [
                [this.coord[0] - 2, this.coord[1] - 1],
            ],
            [
                [this.coord[0] - 1, this.coord[1] - 2]
            ],
            [
                [this.coord[0] + 1, this.coord[1] - 2],
            ],
            [
                [this.coord[0] + 2, this.coord[1] - 1]
            ],
            [
                [this.coord[0] + 2, this.coord[1] + 1],
            ],
            [
                [this.coord[0] + 1, this.coord[1] + 2]
            ]
        ];
    }
}

export default Knight;