import React, { useState } from "react";
import { DatePicker, InputNumber } from "antd";
import moment from 'moment';

function TodoForm({ todo, setTodo, edit, setEdit }) {
  const [priority, setPriority] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [date, setDate] = useState('');


  const addTodo = () => {
    const newTodo = { _id: todo.length + 1, message: inputMessage, priority: priority, date: date };
    setTodo([newTodo, ...todo].sort((a, b) => {
      return a.priority - b.priority;
    }));
  }

  const reset = () => {
    setPriority('');
    setInputMessage('');
    setDate('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
    reset()
    
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const editTodo = { _id: todo[edit.index]._id, message: inputMessage, priority: priority, date: date };
    todo[edit.index] = editTodo;
    setTodo([...todo]);
    setPriority(todo[edit.index].priority);
    setEdit({ status: false, index: undefined });
   

    console.log(editTodo)
  }
// const myDate =moment().format('MM/DD/YYYY')
const today = moment(new Date().getDate(),'DD/MM/YYYY')
// console.log(today)
  return (
    <>
      {!edit.status ? (
        <form onSubmit={handleSubmit}>
          <InputNumber
            onChange={priority => setPriority(priority)}
            value={priority}
            placeholder="priority"
          />
          <input
            className="todo-input"
            placeholder="Add a todo"
            onChange={message => setInputMessage(message.target.value)}
            value={inputMessage}
          />
          <DatePicker onChange={(_, dateString) => setDate(dateString)} value={date ? moment(date) : null} />
          <button type="submit" className="todo-button">Add to do</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitEdit}>
          <InputNumber
            // placeholder={todo[edit.index].priority}
            value={todo[edit.index].priority}
            onChange={priority => setPriority(priority)}
            
          />
          <input
            className="todo-input"
            // placeholder={todo[edit.index].message}
            value={todo[edit.index].message}
            onChange={message => setInputMessage(message.target.value)}
           
          />
          
          <DatePicker 
           value={today}
          onChange={(_, dateString) => setDate(dateString)} 
          // placeholder={moment(todo[edit.index].date).format('DD/MM/YYYY')}
         
          />
          <button type="submit" className="todo-button">Edit</button>
        </form>
      )}
    </>
  );
}

export default TodoForm; 
