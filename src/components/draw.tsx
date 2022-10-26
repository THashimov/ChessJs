import React from "react";
import { useState } from "react";
import { JsxElement } from "typescript";

interface DrawProps {
    resetGame: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Draw: React.FC<DrawProps> = (prop) => {
    const [keepPlaying, setKeepPlaying] = useState<boolean>(false);

    let showDraw: JSX.Element = 
                                  <div className='drawOption'>
                                  <h1>50 Moves have been made with no capture, would you like to draw?</h1>
                                  <div className="drawBtnContainer">
                                      <button onClick={() => {resetGame()}}>Yes</button>
                                      <button onClick={() => {continueGame()}}>No</button>
                                  </div>
                                  </div>


    const continueGame = () => {
        showDraw = <></>;
        keepPlaying ? setKeepPlaying(false) : setKeepPlaying(true);
    }

    const resetGame = () => {
        prop.resetGame(true);
    }


    return ( 
        <>
            {showDraw}     
        </>
        );
}
 
export default Draw;