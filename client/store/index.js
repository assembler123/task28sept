import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DataReducer from '../reducers/dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(DataReducer,composeWithDevTools(applyMiddleware(thunk)))