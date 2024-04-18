// generate action object for count
import { INCREMENT, DECREMENT } from "./constant";
// import store from "./store";    // store is imported here to dispatch the action

export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});
export const createIncrementAsyncAction = (data, time) => {
    // async: return a function instead of an object
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}