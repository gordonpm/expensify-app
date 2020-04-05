import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <ul>
            <li>Description: {description}</li>
            <li>Amount: {amount}</li>
            <li>Created At: {createdAt}</li>
            <button onClick={(expense) => {
                dispatch(removeExpense({id}));
            }}>Remove</button>
        </ul>
    </div>
);

export default connect()(ExpenseListItem);