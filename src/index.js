import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "../src/Router";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode >
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();