import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);