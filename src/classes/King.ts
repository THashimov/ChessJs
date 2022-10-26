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
    }

    updatePossibleMoves() {
        this.possibleMoves = 
        [
            [[this.coords[0] - 1, this.coords[1]]],
            [[this.coords[0] + 1, this.coords[1]]],
            [[this.coords[0], this.coords[1] + 1]],
            [[this.coords[0], this.coords[1] - 1]]
        ];
    }
}

export default King;