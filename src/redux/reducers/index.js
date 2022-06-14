import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { selectedProductReducer } from './selectedProductReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from "./checkoutReducer";
import { loginReducer } from './loginReducer';
import { tempReducer } from './tempReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    productSelected: selectedProductReducer,
    cart: cartReducer,
    order: checkoutReducer,
    login: loginReducer,
    fetch: tempReducer,
})

export default reducers;