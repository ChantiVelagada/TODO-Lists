import React, {useEffect, useState} from "react";
import Input from "./components/Input";
import Lists from "./components/Lists";

function App() {
	
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("Items")

		if (localValue == null) return[]

		return JSON.parse(localValue)
	});

	useEffect(() => {
		localStorage.setItem("Items", JSON.stringify(todos))
	}, [todos])

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
					...currentTodos,
					{ id: crypto.randomUUID(), title, completed: false}
					]
			})
	}
	

	function toggleTodo(id, completed) {
		setTodos(currentTodos => {
			return currentTodos.map(todo => {
				if (todo.id === id) {
					return {...todo, completed}
				}

				return todo
			})
		})
	}

	function deleteTodo(id) {
		setTodos(currentTodos => {
			return currentTodos.filter(todo => todo.id != id)
		})
	}

	return(
		<div className="container">
			<h1>Todo Lists</h1>
			<Input addTodo={addTodo}/>
			<Lists 
				todos={todos} 
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</div>
	)
}

export default App