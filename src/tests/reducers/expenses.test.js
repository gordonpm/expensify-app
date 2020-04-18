import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add expense
test('should add new expense', () => {
  const expense = {
    id: '4',
    description: 'iPhone',
    note: '',
    amount: 30000,
    createdAt: 100
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


// should edit expense
test('should edit expense with id', () => {
  const updates = {
    amount: 295,
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  }
  const expense = {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 295,
    createdAt: 0
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(295);
});

// should not edit expense if expense not found
test('should not edit expense with invalid id', () => {
  const updates = {
    amount: 295,
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
