import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore} from 'redux-persist';
<<<<<<< HEAD
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';
const middlewares = [thunk];
=======
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
>>>>>>> d80b1caef689541f55515179aa086b75705f788a

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store = createStore( rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor= persistStore(store);

export default {store, persistor};