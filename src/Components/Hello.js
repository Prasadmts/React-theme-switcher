import React, { useContext, useState } from "react";

import colorContext from "../context/colorContext";

const Hello = () => {
    let {style, morning, twilight, night} = useContext(colorContext)
    let [count, setCount] = useState(1)
    let [styleName, setStyleName] = useState("Twilight")

    // function to change the color & color name
    function changeStyle() {
        if(count == 1) {
            twilight();
            setStyleName("Night")
            setCount(count+1)
        }
        else if(count == 2) {
            night()
            setStyleName("Morning")
            setCount(count+1)
        }
        else {
            morning()
            setStyleName("Twilight")
            setCount(1)
        }
    }

    return (
        <div>
            <h1>Theme Switcher</h1>
            <div style={{color: style.color, backgroundColor:style.backgroundColor, border:style.border, textAlign:style.align}}>
                <h1>Prasad M</h1>
                <div>I am a Software Developer</div>
                <br />
                <button>Know More</button>
            </div>
            <br></br>
            <br></br>
            <button onClick={changeStyle}>{styleName}</button>
        </div>
    )
}

export default Hello