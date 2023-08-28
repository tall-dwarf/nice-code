import React from 'react';
import "./style/index.sass"
import Main from '../pages/Main/Main';
import { store } from './store'
import { Provider } from 'react-redux'

export default function App(){


    return(
        <Provider store={store}>
            <Main />
        </Provider>
    )
}