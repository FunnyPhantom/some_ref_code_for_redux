import {createStore, combineReducers, applyMiddleware} from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";
import thunk from 'redux-thunk'

// ye alame middleware khafan bra redux vojud dare search kon bebinishoon, vaghean donyaye bahali dare
// rasti, redux devtools (alave bar react devtools) ham hast ke komak mikone reduxeto rahat tar debug koni
const store = createStore(combineReducers({
    todo: todoReducer,
    counter: counterReducer
}), applyMiddleware(thunk))

// console.log(store.getState())

export default store;
