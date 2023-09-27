export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {

    return (
        <li  
            className='task-list'
        >				
            <input 
                type='checkbox' 
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <p className='task-value'>{title}</p>
            <i onClick={()=>deleteTodo(id)} className='fas fa-trash'></i>
        </li>
    )
}