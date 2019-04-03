import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import GetAppStore from './store/store';
import { getFilms } from './actions/films';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import './styles/style.css';

const store = GetAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getFilms()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});

serviceWorker.register();