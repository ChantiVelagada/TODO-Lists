import React from 'react';
import { TodoItem } from './todoItem';

const Lists = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <div className='task-container'>
        <ul>
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
	</div>
  )
}

export default Lists