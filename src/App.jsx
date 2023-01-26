import React, { useState } from "react";
import Listitems from "./Listitems";

const App =()=> {

    const [additem, setAddItem] = useState("");
    const [items, setItems]= useState([])

    const setItem = (event)=> {
        setAddItem(event.target.value);
    }

    const showItem = ()=> {
        setItems((olditems)=> {
            return [...olditems, additem]
        });
        setAddItem("");
    }

    const deleteItem = (id)=> {
        setItems((olditems)=> {
            return olditems.filter((arrValue,index)=> {
                if(index!==id)
                    return arrValue; 
            })
        })
    }

    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>ToDo List </h1>

                    <input type="text" placeholder="Add a items"
                    value={additem}
                    onChange={setItem} />

                    <button onClick={showItem}>+</button>

                    <div>
                    <ol>
                        {/* <li>{items}</li> */}
                        {items.map((itemVal, index)=> {
                            return <Listitems key={index} id={index} 
                            onSelect={deleteItem}
                            value={itemVal}/>
                        })}
                    </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;