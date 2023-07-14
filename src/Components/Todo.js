import React from "react";
import { connect } from "react-redux";

const Todo = (props) => {
  function toggleIsDone() {
    props.dispatch({
      type: "toggleIsDone",
      index: props.index,
      isDone: !props.todo.isDone,
    });
  }

  function handleDelete() {
    props.dispatch({
      type: "deleteTodo",
      index: props.index,
    });
  }

  return (
    <li className="todo flex">
      <div className="flex">
        <input
          onClick={toggleIsDone}
          className="checkbox"
          type="radio"
          checked={props.todo.isDone}
        />
        <h2 className={props.todo.isDone ? "disable" : ""}>
          {props.todo.label}
        </h2>
      </div>

      <button onClick={handleDelete} className="close-btn">
        ❌
      </button>
    </li>
  );
};

function mapStateToProps(state) {
  return { allTodo: state.allTodo };
}

export default connect(mapStateToProps)(Todo);
