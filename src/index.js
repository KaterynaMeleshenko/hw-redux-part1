import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css"
import reportWebVitals from './reportWebVitals';
import MainFunc from "./Redux/HW"

ReactDOM.render(
  <React.StrictMode>
    <MainFunc />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
