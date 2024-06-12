import { configureStore } from "@reduxjs/toolkit";

import counterReducer  from "./counter.js"
import authReducer from "./auth.js"

// counterSlice.actions.toggleCounter
// even though we're working with multiple slices in auth.js and counter.js, we still 
// only have 1 Redux store which has only 1 root reducer
// this reducer takes an object which acts as a map of reducers
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
