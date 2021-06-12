import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


// Add Expense
const addExpense = (
	{
		description = '',
		note = '', 
		amount = 0, 
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt
	}
})

// Remove Expense
const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})

// Edit Expense
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})


const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense
				}
			})
		default:
			return state
	}
}


// FILTERS Actions

// Set Filter Text
const setTextFilter = (text= '') => ({
	type: 'SET_Text_FILTER',
	text
})

// Sort By Date
const sortByDate = (value = '') => ({
	type: 'SET_SORT_BY',
	value
})

// Sort By Amount
const sortByAmount = (value = '') => ({
	type: 'SET_SORT_BY',
	value
})

// Set End Date
const setEndDate = (date) => ({
	type: 'SET_END_DATE',
	date
})

// Set Start Date
const setStartDate = (date) => ({
	type: 'SET_START_DATE',
	date
})

// Filter Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_Text_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.value
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.date
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.date
			}
		default:
			return state
			
	}
}

// GEt Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}  else if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	})
}

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
)

store.subscribe(() => {
	const state = store.getState();
	const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpense);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 10, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'electricity bill', amount: 100, createdAt: -1000}))

// console.log(expenseOne.expense.id)
// store.dispatch(editExpense(expenseOne.expense.id, {description: 'Fees', note: "This was paid to Rohan's school"}))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(setTextFilter());

// store.dispatch(sortByDate('02/06/2021'));
// store.dispatch(sortByAmount('54500'));

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());







// store.dispatch(removeExpense(expenseOne.expense))

// const demoState = {
// 	expenses: [{
// 		id: 'kshjdsjks',
// 		description: 'January Rent',
// 		note: 'This was the final payment for that address.',
// 		amount: 54500,
// 		createdAt: 0
// 	}],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount',
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// }

