import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
    //wrapping our entire app by the Context Provider
        document.getElementById('root')
);