import React from "react";

interface DrawProps {
    resetGame: React.Dispatch<React.SetStateAction<boolean>>;
    keepPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Draw: React.FC<DrawProps> = (prop) => {

    const continueGame = () => {
        prop.keepPlaying(true)
    }

    const resetGame = () => {
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