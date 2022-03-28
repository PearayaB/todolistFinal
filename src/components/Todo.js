import React from "react";
import { Checkbox } from "antd";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "antd/dist/antd.css";


const Todo = ({ todo, setTodo, setEdit }) => {
  const removeTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  return (
    <>
      {todo.map((todo, index) => {
        return (
          <div className="customers" key={ todo._id }>
            <div
              className={todo ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div >
                {todo.priority}
              </div>
              <div>
                {todo.message}
              </div>
              <div className="icons">
                {todo.date}
                <div className="checkbox">
                  <Checkbox />
                </div>
                <TiEdit
                  onClick={() => { setEdit({ status: true, index: index  }) }}
                  className="edit-icon"
                />
                <RiCloseCircleLine
                  onClick={() => removeTodo(index)}
                  className="delete-icon"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

};

export default Todo;