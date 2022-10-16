import React from 'react';
import ChessBoard from '../classes/ChessBoard';

interface GameLogic {
    
}
 
const GameLogic: React.FC<GameLogic> = () => {
    const chessBoard = new ChessBoard();

    // console.log(chessBoard)

    // let boardCells: JSX.Element [] = [];
    // const numberOfCells: number = 8;
    // let key: number = 0;

    // const handleClick = (e) => {
    //     console.log(e.target.getAttribute('data-value'))
    // }   

    // for (let i = 0; i < numberOfCells; i++) {
    //     for (let j = 0; j < numberOfCells; j++) {
    //         let whichClass: string = 'cell';

    //         // Check for of or even using bitwise
    //         // If you OR a number by 1 and it's higher than itself, it is even
    //         if ((i | 1) > i) {
    //             if ((j | 1) > j) {
    //                 whichClass = `${whichClass} white`
    //             } else {
    //                 whichClass = `${whichClass} black`
    //             }
    //         } else {
    //             if ((j | 1) > j) {
    //                 whichClass = `${whichClass} black`
    //             } else {
    //                 whichClass = `${whichClass} white`
    //             }
    //         }

    //         const cell: JSX.Element = <div className={whichClass} data-value={key} key={key} onClick={(e) => {handleClick(e)}}>
    //                                     <img src='' alt=''></img>
    //                                   </div>
            
    //         boardCells.push(cell);
    //         key += 1;
    //     }
    // }

    return ( 
            <div className="chessBoard">
                {/* {boardCells} */}
            </div>
        );
}
 
export default GameLogic;