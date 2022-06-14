import { ActionTypes } from "../constants/action-types";

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            // console.log('selected product reducer - ', type, payload);
            return {...state, ...payload};
        default:
            return state;
    }
}