import {useState} from "react";
import './BackgroundButton.css'
function BackgroundButton(){
    // const [clicked, setClicked] = useState(false);
    //
    // const handleClick = () => {
    //     setClicked(true);
    //     setTimeout(()=>{
    //         setClicked(false);
    //     },500);
    //
    // };
    const [secondButtonClicked, setSecondButtonClicked] = useState(false);

    const handleSecondButtonClick = () => {
        setSecondButtonClicked(true);
    };

    const resetSecondButton = () => {
        setSecondButtonClicked(false);
    };

    return(
        <div>
            {/*<button*/}
            {/*    className={`my-button ${clicked ? 'clicked' : ''}`}*/}
            {/*    onClick={handleClick}*/}
            {/*    onDoubleClick={()=>setClicked(false)}*/}
            {/*>*/}
            {/*    Click me!*/}
            {/*</button>*/}
            <button
                className={`my-button ${secondButtonClicked ? 'transparent' : ''}`}
                onClick={resetSecondButton}
            >
                First Button
            </button>
            <button
                className={`my-button ${secondButtonClicked ? 'transparent' : ''}`}
                onClick={handleSecondButtonClick}
            >
                Second Button
            </button>
        </div>
    )
}
export default BackgroundButton;
