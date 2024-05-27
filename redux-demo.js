const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // getState() will give us the latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

// Note: we don't execute counterSubscriber function, we just point at it, so omit the ()
// It will be executed by Redux
store.subscribe(counterSubscriber);

// Method that dispatches an action (a js object with a type property)
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
