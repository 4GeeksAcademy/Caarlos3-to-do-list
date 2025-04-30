import React, { useState } from "react";

const ToDoList = () => {

    const [list, setList] = useState("");
    const [toDO, setToDo] = useState([]);

    return (
        <div className="container col-12 col-md-6 col-sm-8 col-lg-4">
            <div className="principal">
                <h3>To-Do List</h3>
                <input type="text" value={list} onChange={(e) => setList(e.target.value)} 
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        setToDo(toDO.concat(list));
                        setList("");
                
                    }
                }}
                placeholder="Escribe tu tarea aquí..." />
                <ul>
                    {toDO.map((item, index) => (
                        <li key={index} onClick={() => setToDo(toDO.filter((item, currentIndex) => currentIndex !== index))}>{item}</li>
                    ))}
                </ul>
                <div>{toDO.length} tareas</div>
            </div>

        </div>
    )
}

export default ToDoList;