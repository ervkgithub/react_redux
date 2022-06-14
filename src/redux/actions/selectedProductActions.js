import { ActionTypes } from "../constants/action-types";

export const selectedProduct = (productSelected) => {
    console.log('selected product action - ', productSelected );
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: productSelected,
    };
};