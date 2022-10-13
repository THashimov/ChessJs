class Knight {
    color: string;
    imgSrc: string;
    key: number;


    constructor (
        color: string,
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/knight_' + color + '.png';
        this.key = key;
    }
}

export default Knight;