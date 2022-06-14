import { ActionTypes } from "../constants/action-types";

const initialStateCart = {
    cartProducts:[]
}



export const cartReducer = (state = initialStateCart, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            console.log('cart reducer - ', type, payload);
            let temp = [...state.cartProducts, payload]
            return {...state, cartProducts: temp};
        case ActionTypes.REMOVE_PRODUCT_FROM_CART:
            console.log('cart reducer - ', type, payload);
            let temp2 = state.cartProducts.filter((temp) => {
                return temp.id !== payload;
            })
            return {...state, cartProducts: temp2};
        default:
            return state;
    }
}