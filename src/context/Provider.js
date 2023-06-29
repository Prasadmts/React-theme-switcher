import React ,{useState} from 'react';
import colorContext from './colorContext';

let morning = {color:"black", backgroundColor:"white", border:"1px solid red", align:"left"}

const Provider = (props) => {
    let [style, setStyle] = useState(morning)

    return (
        <colorContext.Provider value={
            {
                style:style,
                morning: ()=> setStyle(morning),
                twilight: () => setStyle({color:"tomato", backgroundColor:"green", border:"1px solid yellow", align:"right"}),
                night: () => setStyle({color:"white", backgroundColor:"black", border:"1px solid blue", align:"center"}),
    
            }
        }>
            {props.children}
        </colorContext.Provider>
    )
}

export default Provider
