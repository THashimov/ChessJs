class Rook {
    color: string;
    imgSrc: string;
    key: number;


    constructor (
        color: string,
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/rook_' + color + '.png';
        this.key = key;
    }
}

export default Rook;