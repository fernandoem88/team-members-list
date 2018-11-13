import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import MainLayout from './components-hoc/MainLayout';
import Routes from './components/Routes';
import './index.css';
import combinedReducers from './redux-store/combined-reducers';

const store = createStore(combinedReducers, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainLayout>
                <Routes />
            </MainLayout>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
