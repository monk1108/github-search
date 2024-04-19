// generate action object for count
import { INCREMENT, DECREMENT } from "../constant";
// import store from "./store";    // store is imported here to dispatch the action

export const increment = data => ({type: INCREMENT, data});
export const decrement = data => ({type: DECREMENT, data});
export const incrementAsync = (data, time) => {
    // async: return a function instead of an object
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}