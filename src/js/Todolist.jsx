import React, { useState } from "react";

const ToDoList = () => {

    const [list, setList] = useState("");
    const [toDO, setToDo] = useState([]);

    return (
        <div className="container">
            <div className="principal">
                <h3>To-Do List</h3>
                <input type="text" value={list} onChange={(e) => setList(e.target.value)} 
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        setToDo(toDO.concat(list));
                        setToDo("");
                    }

                }}
                placeholder="Escribe tu tarea aquí..." />
                <ul>
                    {toDO.map((item, index) => (
                        <li key={index} onClick={setToDo(toDO.filter(itme, index) => index != currentIndex)}>{item}</li>
                    ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default ToDoList;