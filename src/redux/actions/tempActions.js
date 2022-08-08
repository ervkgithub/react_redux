import { ActionTypes } from "../constants/action-types";


export const fetchProductsList = () => {
    console.log('fetchProductsList - FETCH_PRODUCTS_LIST');
    return{
        type: ActionTypes.FETCH_PRODUCTS_LIST,
    }
}
