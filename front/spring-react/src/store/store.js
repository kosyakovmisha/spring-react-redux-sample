import { createStore, applyMiddleware } from "redux";
import films from '../reducers/films';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default () => {
    return createStore(films, applyMiddleware(thunk, logger));
};