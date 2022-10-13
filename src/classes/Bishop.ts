class Bishop {
    color: string;
    imgSrc: string;
    key: number;


    constructor (
        color: string,
        key: number
    ) {
        this.color = color;
        this.imgSrc = '/assets/bishop_' + color + '.png';
        this.key = key;
    }
}

export default Bishop;