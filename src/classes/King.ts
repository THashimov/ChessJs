class King {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    possibleAttacks: number [][][];
    enPassantAllowed: boolean;

    constructor (
        color: string,
        coord: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/king_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'king';
    }

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [[this.coord[0] - 1, this.coord[1]]],
            [[this.coord[0] + 1, this.coord[1]]],
            [[this.coord[0], this.coord[1] + 1]],
            [[this.coord[0], this.coord[1] - 1]]
        ];
    }
}

export default King;