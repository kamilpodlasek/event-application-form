import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';
import { services } from './rootService';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'antd/dist/antd.css';

const epicMiddleware = createEpicMiddleware({ dependencies: services });

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
