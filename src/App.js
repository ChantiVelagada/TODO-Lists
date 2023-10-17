import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './todoslice';

function App() {
	const [todoText, setTodosText] = useState("");
	const [searchText, setSearchText] = useState("");
	const [displayOption, setDisplayOption] = useState("all");
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = (e) => {
		e.preventDefault()

		dispatch(addTodo({id : Date.now(), text: todoText, completed: false}))
		setTodosText('')
	}

	const handleRemoveTodo = (id) => {
		dispatch(removeTodo(id));
	  };
	
	  const handleToggleTodo = (id) => {
		dispatch(toggleTodo(id));
	  };
	
	  const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchText.toLowerCase())
	  );
	
	  const handleDisplayOption = (option) => {
		setDisplayOption(option);
	  };
	
	  let displayedTodos = [];
	  if (displayOption === "all") {
		displayedTodos = filteredTodos;
	  } else if (displayOption === "completed") {
		displayedTodos = filteredTodos.filter((todo) => todo.completed);
	  } else if (displayOption === "incomplete") {
		displayedTodos = filteredTodos.filter((todo) => !todo.completed);
	  }

  return (
	<>
		<div className="header">
			<h1>To-do App</h1>
			<input
				className="input" 
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				type="text" 
				placeholder="Search todos.." 
			/>
		</div>
		<div className='nav'>
			<button 
				className='nav-btn'
				onClick={() => handleDisplayOption("all")}
			>
				All
			</button>
			<button 
				className='nav-btn'
				onClick={() => handleDisplayOption("completed")}
			>
				Completed
			</button>
			<button 
				className='nav-btn'
				onClick={() => handleDisplayOption("incomplete")} 
			>
				Incomplete
			</button>
		</div>
        
        <form className='task-input' >
          <input 
            type='text'
			value={todoText}
			onChange={(e) => setTodosText(e.target.value)}
            placeholder='Add a new todo'
          />
          <button
            type='submit'
			onClick={handleAddTodo}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
		<ul className="task_wrapper">
        {displayedTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
	</>
  )
}

export default App;