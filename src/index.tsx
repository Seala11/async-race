import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/app/App';
import { HashRouter as Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '@src/utils/taskCheck';

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
