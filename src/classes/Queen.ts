class Queen {
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
        this.imgSrc = '/assets/queen_' + color + '.png';
        this.coord = coord;
        this.key = key;
        this.type = 'queen';
    }
}

export default Queen;