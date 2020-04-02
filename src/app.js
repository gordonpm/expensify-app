import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'; // reset for all browsers
import './styles/styles.scss' 

ReactDOM.render(<AppRouter />, document.getElementById('app'));