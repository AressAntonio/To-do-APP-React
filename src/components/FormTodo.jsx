import React, { useState } from "react";

const FormTodo= props =>{
    const [description, setDescription]=useState("");
    const {addItem}=props;

    const handleSubmit= e =>{
        e.preventDefauld();
        console.log(description)
        
        addItem({
            done: false, 
            id: (new Date()).toString(),
            description
        });

        setDescription("");
    }
    return(
    
        <form onSubmit={handleSubmit}>
                <div className="titulo">
                    <h1>Tareas.</h1>
                    <div className="img"></div>
                    </div><br></br>
                   <div className="todo-list">
                      <div className="input">
                        <input
                            type='text'
                            className="text"
                            value={description}
                            onChange={e =>setDescription(e.target.value)}
                        />
                        <button
                            className="button-blue"
                            disabled={description ?"":"disabled"}>
                            Agregar tarea
                        </button>
                    </div>
                    
                </div>
            
        </form>
        
        
    )
}

export default FormTodo;