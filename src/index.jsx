import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This should import Tailwind CSS
import './styles/custom.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);