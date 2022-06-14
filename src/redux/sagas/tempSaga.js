import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from "../constants/action-types";

const fetchProducts = () => {
    return new Promise ((resolve, reject) => {
        console.log('api cal method hit...')
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            console.log(response.data);
            resolve(response.data);
        })
        .catch((err) => {
            console.log('err in api', err);
            reject(err);
        })
    })   
}

function* fetchproductslist (action) {
    try{
        const data = yield call(fetchProducts);
        yield put({type: ActionTypes.FETCH_PRODUCTS_LIST_SUCCESS, payload: data })
    }
    catch(e) {
        yield put({type: ActionTypes.FETCH_PRODUCTS_LIST_FAILURE, payload: e.message})
    }
}


function* tempSaga() {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS_LIST, fetchproductslist);
}

export default tempSaga;