import React from 'react';

interface ChessBoardProps {
    
}
 
const ChessBoard: React.FC<ChessBoardProps> = () => {
    let boardCells: JSX.Element [] = [];
    const cells: number = 8;

    const handleClick = (key) => {
        console.log(key)
    }   

    for (let i = 0; i < Math.pow(cells, 2); i++) {
        let whichClass = 'cell';
        let num = 0;
       
        
        if (i < 8) {
            if ((i | 1) > i) {
                    whichClass = `${whichClass} white`
            } else {
                whichClass = `${whichClass} black`
            }
        } else if (i >= 8 && i <= 15) {
            if ((i | 1) > i) {
                whichClass = `${whichClass} black`
            } else {
                whichClass = `${whichClass} white`
            }
        } else if (i >= 16 && i <= 23) {
            if ((i | 1) > i) {
                whichClass = `${whichClass} white`
            } else {
                whichClass = `${whichClass} black`
            }
        } else if (i >= 24 && i <= 31) {
            if ((i | 1) > i) {
                whichClass = `${whichClass} black`
            } else {
                whichClass = `${whichClass} white`
            }
        }


        const cell: JSX.Element = <div className={whichClass}  key={i} onClick={() => {handleClick(i)}}>
            <img src='' alt=''></img>
        </div>
        boardCells.push(cell);
        num ++;
    }


    return ( 
            <div className="chessBoard">
                {boardCells}
            </div>
        );
}
 
export default ChessBoard;