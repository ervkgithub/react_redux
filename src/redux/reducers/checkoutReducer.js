import { ActionTypes } from "../constants/action-types";

export const checkoutReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case ActionTypes.CHECKOUT_ORDER : 
            return {
                ...state, payload
            }
        default :
            return state
    }
}