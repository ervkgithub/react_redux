import { ActionTypes } from "../constants/action-types";


export const addProductToCart = (cartProduct) => {
    // console.log('product added in cart - ', cartProduct);
    return{
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: cartProduct,
    }
}

export const removeProductFromCart = (id) => {
    return{
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: id,
    }
}

export const emptyCart = () => {
    return{
        type: ActionTypes.EMPTY_CART
    }
}