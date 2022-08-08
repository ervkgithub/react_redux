import { ActionTypes } from "../constants/action-types";

export const checkoutOrder = (data) => {
    console.log('chgeckout order - ', data);
    return{
        type: ActionTypes.CHECKOUT_ORDER,
        payload: data
    }
}