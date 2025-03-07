import { createStore } from "@reduxjs/toolkit";
import reducer from "./Reducers/number";

const store = createStore(reducer);

export default store;
