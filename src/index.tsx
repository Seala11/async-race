import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/app/App';
import { HashRouter as Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
