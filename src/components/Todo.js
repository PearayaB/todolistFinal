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
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
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
  // return todos.map((todo, index) => (
  //   <div className="customers">

  //     <div 
  //       className={todo.isComplete ? "todo-row complete" : "todo-row"}
  //       key={index}
  //     >
  //       <div >
  //         {todo.priority}
  //       </div>
  //       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
  //         {todo.text}
  //       </div>
  //       <div className="icons">
  //          {todo.date}
  //          <div className="checkbox">
  //         <Checkbox />
  //         </div>
  //         <TiEdit
  //           onClick={() => {setEdit({ id: todo.id, value: todo.text ,priority:todo.priority,date:todo.date});}}
  //           className="edit-icon" 
  //         />
  //         <RiCloseCircleLine
  //           onClick={() => removeTodo(todo.id)}
  //           className="delete-icon"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // ));
};

export default Todo;