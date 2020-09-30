import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function TodoInput() {
  let todos = useSelector(state => state);
  let [name, setName] = useState();
  let dispatch = useDispatch();
  let id = null;

  if(todos.length > 0) {
    id = todos[todos.length -1].id + 1;
  } else {
    id = 1;
  }

  return (
    <div>
      <h1 className="my-5">Todo List</h1>
      <div className="row m-2">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="col form-control"
        />
        <button
          onClick={() => {
            dispatch(addTodo(
              { id: id, name: name, done: false }
            ));
            setName('');
          }}
          className="btn btn-primary mx-2"
        >Add</button>
      </div>
    </div>
  )
}

export default TodoInput;
