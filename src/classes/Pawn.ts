class Pawn {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][][];
    isSelected: boolean;
    hasMadeFirstMove: boolean;

 
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
        this.isSelected = false;
        this.hasMadeFirstMove = false;
    };


    updatePossibleMoves() {
        if (this.hasMadeFirstMove) {
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
                        [this.coord[0] - 1, this.coord[1]]
                    ], 
                    [
                        [this.coord[0] - 2, this.coord[1]]
                    ]
                ];
    }
    }
}

export default Pawn;