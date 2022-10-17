class King {
    color: string;
    imgSrc: string;
    coord: number [];
    key: number;
    type: string;


    constructor (
        color: string,
        coord: number [],
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/king_' + color + '.png';
        this.key = key;
        this.coord = coord;
        this.key = key;
        this.type = 'king';
    }
}

export default King;