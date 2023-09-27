import React,{useState} from 'react';

function Input(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        props.addTodo(newItem)
        
        setNewItem("")
    }

    return (
        <div className="input-container">
            <input 
            id="task-input" 
            value={newItem} type="text"
            onChange={e => setNewItem(e.target.value)} placeholder="Add a todo..." 
            />
            <i 
            className="fa-solid fa-plus"
            name="submit"
            onClick={handleSubmit}
            ></i>
		</div>
    )
}

export default Input