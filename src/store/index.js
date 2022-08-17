import { createStore } from "redux";

const reduxReducer = (
  state = { counter: 0, isCounterVisible: true },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isCounterVisible: state.isCounterVisible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      isCounterVisible: state.isCounterVisible,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isCounterVisible: state.isCounterVisible,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      isCounterVisible: !state.isCounterVisible,
    };
  }
  return state;
};

const store = createStore(reduxReducer);

export default store;
