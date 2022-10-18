class Pawn {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    hasMoved: boolean;
 
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
        this.possibleMoves = 
        [
            [
                [this.coord[0] - 1, this.coord[1]]
            ], 
            [
                [this.coord[0] - 2, this.coord[1]]
            ]
        ]
    }

    hasMadeFirstMove = () => {
        this.hasMoved = true;
        this.possibleMoves = 
        [
            [
                [this.coord[0] - 1, this.coord[1]]
            ] 
        ]
    }
}

export default Pawn;