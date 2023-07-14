import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  function handleInput({ target }) {
    const { value } = target;

    props.dispatch({
      type: "input",
      label: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let input = e.target.input.value;
    props.dispatch({
      type: "push",
      label: input,
      isDone: false,
    });

    e.target.input.value = "";
  }

  return (
    <>
      <h1>todo's</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          className="search-bar"
          placeholder="add your todos"
          type="text"
          name="input"
          value={props.label}
        />
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return { label: state.label };
}

export default connect(mapStateToProps)(Header);
