class ChessBoard {
    cells: number [][];

    constructor() {
        this.cells = [[]];

        for (let i = 0; i < 8; i++){
            let arr: number [] = [];

            for (let j = 0; j < 8; j++) {
                arr.push(j)
            }
            this.cells.push(arr);
        }


        console.log(this.cells)

    }
}

export default ChessBoard;