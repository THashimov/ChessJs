class Rook {
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
        this.imgSrc = '/assets/rook_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'rook';
    }
}

export default Rook;