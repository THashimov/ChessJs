class Bishop {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;
    possibleMoves: number [][];


    constructor (
        color: string,
        coord: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/bishop_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'bishop';
        this.possibleMoves = 
        [
            [this.coord[0] - 1, this.coord[1] - 1],
            [this.coord[0] - 2, this.coord[1] - 2],
            [this.coord[0] - 3, this.coord[1] - 3],
            [this.coord[0] - 4, this.coord[1] - 4],
            [this.coord[0] - 5, this.coord[1] - 5],
            [this.coord[0] - 6, this.coord[1] - 6],
            [this.coord[0] - 7, this.coord[1] - 7],
            [this.coord[0] + 1, this.coord[1] + 1],
            [this.coord[0] + 2, this.coord[1] + 2],
            [this.coord[0] + 3, this.coord[1] + 3],
            [this.coord[0] + 4, this.coord[1] + 4],
            [this.coord[0] + 5, this.coord[1] + 5],
            [this.coord[0] + 6, this.coord[1] + 6],
            [this.coord[0] + 7, this.coord[1] + 7],
            [this.coord[0] - 1, this.coord[1] + 1],
            [this.coord[0] - 2, this.coord[1] + 2],
            [this.coord[0] - 3, this.coord[1] + 3],
            [this.coord[0] - 4, this.coord[1] + 4],
            [this.coord[0] - 5, this.coord[1] + 5],
            [this.coord[0] - 6, this.coord[1] + 6],
            [this.coord[0] - 7, this.coord[1] + 7],
            [this.coord[0] + 1, this.coord[1] - 1],
            [this.coord[0] + 2, this.coord[1] - 2],
            [this.coord[0] + 3, this.coord[1] - 3],
            [this.coord[0] + 4, this.coord[1] - 4],
            [this.coord[0] + 5, this.coord[1] - 5],
            [this.coord[0] + 6, this.coord[1] - 6],
            [this.coord[0] + 7, this.coord[1] - 7],
        ]
    }
}

export default Bishop;