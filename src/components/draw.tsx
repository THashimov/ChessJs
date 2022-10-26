import React from "react";

interface DrawProps {
    resetGame: React.Dispatch<React.SetStateAction<boolean>>;
    drawMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Draw: React.FC<DrawProps> = (prop) => {
    const continueGame = () => {
        prop.drawMenu(false);
    }

    const resetGame = () => {
        prop.drawMenu(false);
        prop.resetGame(true);
    }


    return ( 
        <div className='drawOption'>
        <h1>50 Moves have been made with no capture, would you like to draw?</h1>
        <div className="drawBtnContainer">
            <button onClick={() => {resetGame()}}>Yes</button>
            <button onClick={() => {continueGame()}}>No</button>
        </div>
        </div>
        );
}
 
export default Draw;