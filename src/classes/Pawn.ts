class Pawn {
    color: string;
    imgSrc: string;
    key: number;

    constructor (
        color: string,
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/pawn_' + color + '.png';
        this.key = key;
    }
}

export default Pawn;