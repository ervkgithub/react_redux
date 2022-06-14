import { ActionTypes } from "../constants/action-types";

export const selectedProduct = (productSelected) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: productSelected
    }
}