import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const AllTodos = (props) => {
  return (
    <section className="todo-list">
      <ul>
        {props.todoList.map((todo, i) => {
          return <Todo key={i} index={i} todo={todo} />;
        })}
      </ul>
    </section>
  );
};

function mapStateToProps(state) {
  return { todoList: state.todoList };
}

export default connect(mapStateToProps)(AllTodos);
