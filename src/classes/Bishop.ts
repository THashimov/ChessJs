class Bishop {
    color: string;
    imgSrc: string;
    coord: number [];


    constructor (
        color: string,
        coord: number []
    ) {
        this.color = color;
        this.imgSrc = '/assets/bishop_' + color + '.png';
        this.coord = coord;
    }
}

export default Bishop;