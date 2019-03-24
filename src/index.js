import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import LandingPage from './components/common/LandingPage';
// import Header from './components/layout/Header';

const App = lazy(() => import('./App'));


ReactDOM.render(<Suspense fallback={<LandingPage />}><App /></Suspense>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
serviceWorker.register();
