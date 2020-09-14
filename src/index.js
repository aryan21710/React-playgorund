import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Parent} from './components/hooksTesting/Parent';

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

