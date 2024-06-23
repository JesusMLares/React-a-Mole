import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props){
    let [mole, setMole] = useState(false);

    const handleClick = () => {
        props.setScore(props.score + 1);
        setMole(false);
    }

    const displayMole = mole ? <Mole setMole={setMole} setScore={props.setScore} handleClick={handleClick}/> : <EmptySlot toggle={setMole}/>;

    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}  
        </div>
    )
}

export default MoleContainer;