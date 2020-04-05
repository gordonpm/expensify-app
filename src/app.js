import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // reset for all browsers
import './styles/styles.scss';

const store = configureStore();

// addExpense - Water bill
// addExpense - Gas bill
// setTextFilter - bill (2 items)
// getVisibleExpenses
store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 7000, createdAt: 5000 }));
store.dispatch(setTextFilter('gas'));

setTimeout(() => {
    store.dispatch(setTextFilter('water'))
}, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));