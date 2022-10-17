class Bishop {
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
        this.imgSrc = '/assets/bishop_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'bishop'
    }
}

export default Bishop;