import { ActionTypes } from "../constants/action-types";

const initialState = {};

export const selectedProductReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            // console.log('selected product reducer - ', type, payload);
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return initialState;
        default:
            return state;
    }
}