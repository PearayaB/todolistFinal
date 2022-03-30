import React from "react";
import { Checkbox } from "antd";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todoList, setTodoList, setEditTodo }) => {
	const removeTodo = (index) => {
		todoList.splice(index, 1);
		setTodoList([...todoList]);
	};

	return (
		<table className="">
			<thead>
			<tr className="table-row">
				{todoList.length !== 0 && (
					<>
						<td><div className="table-header">Priority</div></td>
						<td><div className="table-header">Task</div></td>
						<td><div className="table-header">Date</div></td>
						<td>
							<div className="done-column table-header">Done</div>
						</td>
					</>
				)}
			</tr>
			</thead>
			<tbody>
			{todoList.map((todo, index) => {
				return (
					<tr className="todo-row" key={todo._id}>
						<td>{todo.priority}</td>
						<td>{todo.message}</td>
						<td>{todo.date}</td>
						<td className="done-column">
								<Checkbox />
							<TiEdit
								onClick={() => {
									setEditTodo(todoList[index]);
								}}
								className="edit-icon"
							/>
							<RiCloseCircleLine
								onClick={() => removeTodo(index)}
								className="delete-icon"
							/>
						</td>
					</tr>
				);
			})}
			</tbody>
		</table>
	);
};

export default Todo;