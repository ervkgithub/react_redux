
import {productReducer} from '../reducers/productReducer';
import {selectedProductReducer} from '../reducers/selectedProductReducer';
import { combineReducers } from "redux";

const reducers = combineReducers({
    allProducts : productReducer,
    selectedProduct : selectedProductReducer
})

export default reducers;