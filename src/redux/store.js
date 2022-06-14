import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './reducers';
import tempSaga from './sagas/tempSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(tempSaga);

export default store;





// import {legacy_createStore as createStore} from 'redux';

// import reducers from './reducers';

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;