import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set softBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set softBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should setup text filter', () => {
  const text = 'This is a filter';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toBe(text);
});


// should set start date filter
test('should setup startDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE',  startDate });
  expect(startDate).toEqual(startDate);
});

// should set end date filter
test('should setup endDate filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE',  endDate });
  expect(endDate).toEqual(endDate);
});

