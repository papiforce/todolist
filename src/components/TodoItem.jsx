import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
  let dispatch = useDispatch();

  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div className="badge badge-secondary m-2">#{todo.id}</div>
        <div className={todo.done == false ? "col" : "col done"}>
          <h4 className="text-left">{todo.name}</h4>
        </div>
        <button
          onClick={() => dispatch(updateTodo(todo.id))}
          className="btn btn-primary m-2"
        >{todo.done == false ? "Done" : "Undone"}</button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger m-2"
        >Delete</button>
      </div>
    </div>
  )
}

export default TodoItem;
