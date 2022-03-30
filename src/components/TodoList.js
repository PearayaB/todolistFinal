import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
	const [todoList, setTodoList] = useState([]);
	const [editTodo, setEditTodo] = useState(null);

	return (
		<>
			<Todo
				todoList={todoList}
				setTodoList={setTodoList}
				setEditTodo={setEditTodo}
			/>
			<TodoForm
				editTodo={editTodo}
				setEditTodo={setEditTodo}
				todoList={todoList}
				setTodoList={setTodoList}
			/>
		</>
	);
}

export default TodoList;