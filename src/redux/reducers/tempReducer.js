import { ActionTypes } from "../constants/action-types";


export const tempReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_PRODUCTS_LIST_SUCCESS:
            console.log('temp reducer - FETCH_PRODUCTS_LIST_SUCCESS ', type, payload);
            return {...state, products: payload};
        case ActionTypes.FETCH_PRODUCTS_LIST_FAILURE:
            console.log('temp reducer - FETCH_PRODUCTS_LIST_FAILURE', type, payload);
            return state;
        default:
            return state;
    }
}