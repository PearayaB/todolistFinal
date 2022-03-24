import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList(props) {
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({
    status: false,
    index: 0,
  });

  return (
    <>
      { todo.length !== 0 && 
        <div id="column" >
          <div className="priority">Priority</div>
          <div className="task">Task</div>
          <div className="date">Date</div>
          <div className="done">Done</div>
        </div> 
      }
      <Todo todo={ todo } setTodo={ setTodo } setEdit={ setEdit } />
      <TodoForm todo={ todo } setTodo={ setTodo } edit={ edit } setEdit={ setEdit } />
    </>
  );
}

export default TodoList;
