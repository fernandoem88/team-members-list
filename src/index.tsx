import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import MainLayout from 'HOC/MainLayout';
import Routes from 'Components/Routes';
import combinedReducers from 'ReduxStore/combined-reducers';
import './index.css';

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
