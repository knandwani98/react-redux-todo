import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const countReducer = function (state = { todoList: [], label: "" }, action) {
  switch (action.type) {
    case "input":
      return { ...state, label: action.label };

    case "push":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            label: action.label,
            isDone: false,
          },
        ],
      };

    case "toggleIsDone":
      return {
        ...state,
        todoList: state.todoList.map((todo, i) => {
          return i === action.index ? { ...todo, isDone: action.isDone } : todo;
        }),
      };

    case "deleteTodo":
      return {
        ...state,
        todoList: state.todoList.filter((_todo, i) => {
          return i !== action.index;
        }),
      };

    default:
      return state;
  }
};
let store = createStore(countReducer);
export default store;
