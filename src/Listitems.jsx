import React from "react";

const Listitems = (props)=> {


    return (
        <>
            <i className="fa-sharp fa-solid fa-xmark" onClick={()=> {
                props.onSelect(props.id);
            }}></i>
            <li>{props.value}</li>
        </>
    )
}

export default Listitems;