import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/* eslint-disable */

export default function configureStore(intialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}