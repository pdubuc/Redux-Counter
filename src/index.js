import React from 'react';
import ReactDOM from 'react-dom/client';
// Lesson 290. This is a Component that we use to wrap our root Component below
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// We have to tell it which store to import:
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
// We wrapped the root Component with Provider
// and only this Component & its children will have access to Redux
// we must set the store prop with the value of the Redux store
root.render(<Provider store={store}><App /></Provider>);

// Now all Component children will tap into this store, get data out
// of it, set up a subscription to that data, and can dispatch actions