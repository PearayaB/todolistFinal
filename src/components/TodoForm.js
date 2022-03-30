import React, { useEffect, useState } from "react";
import { DatePicker, InputNumber } from "antd";
import moment from "moment";

function TodoForm({ editTodo, setEditTodo, todoList, setTodoList }) {
	const [priority, setPriority] = useState("");
	const [inputMessage, setInputMessage] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		setPriority(editTodo?.priority ?? "");
		setInputMessage(editTodo?.message ?? "");
		setDate(editTodo?.date ?? "");
	}, [editTodo]);

	const addTodo = () => {
		const newTodo = {
			_id: todoList.length + 1,
			message: inputMessage,
			priority: priority,
			date: date,
		};

		setTodoList(
			[newTodo, ...todoList].sort((a, b) => {
				return a.priority - b.priority;
			})
		);
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();
		const updateList = todoList.map((todo) => {
			if (todo._id === editTodo._id) {
				return {
					_id: editTodo._id,
					message: inputMessage,
					priority: priority,
					date: date,
				};
			}
			return todo;
		});

		setTodoList(
			updateList.sort((a, b) => {
				return a.priority - b.priority;
			})
		);

		setEditTodo(null);
	};

	const reset = () => {
		setPriority("");
		setInputMessage("");
		setDate("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo();
		reset();
	};

	return (
		<form onSubmit={editTodo === null ? handleSubmit : handleEditSubmit}>
			<div className="form-wrapper">
				<InputNumber
					onChange={(priority) => setPriority(priority)}
					value={priority}
					placeholder="priority"
				/>
				<input
					className="todo-input"
					placeholder="Add a todo"
					onChange={(message) =>
						setInputMessage(message.target.value)
					}
					value={inputMessage}
				/>
				<DatePicker
					onChange={(_, dateString) => setDate(dateString)}
					value={date ? moment(date) : null}
				/>
				<button type="submit" className="todo-button">
					{editTodo === null ? "Add todo" : "Edit todo"}
				</button>
			</div>
		</form>
	);
}

export default TodoForm;