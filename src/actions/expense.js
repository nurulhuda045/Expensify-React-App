// import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'


// Add Expense
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});


// old
// export const addExpense = (expense) => (
// 	{
// 		description = '',
// 		note = '', 
// 		amount = 0, 
// 		createdAt = 0
// 	} = {}
// ) => ({
// 	type: 'ADD_EXPENSE',
// 	expense: {
// 		id: uuidv4(),
// 		description,
// 		note,
// 		amount,
// 		createdAt
// 	}
// })

export const startAddExpense = ( expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '', 
			amount = 0, 
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt }
		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		});
	};
};

// Remove Expense
export const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})

export const startRemoveExpense = (id) => {
	return (dispatch) => {
		database.ref(`expenses/${id}`).remove().then((res) => {
			dispatch(removeExpense({id}))
		}).catch((e) => console.log(e))
	}
}

// Edit Expense
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

export const startEditExpense = (id, updates) => {
	return (dispatch) => {
		database.ref(`expenses/${id}`).update(updates).then(() => {
			dispatch(editExpense(id, updates))
		})
	}
}

// SET EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
})

export const startSetExpenses = () => {
	return (dispatch) => {
		return database.ref('expenses').once('value', (snapshot) => {
			const expenses = [];
			snapshot.forEach((snapshotChild) => {
				expenses.push({
					id: snapshotChild.key,
					...snapshotChild.val()
				});
			});
			dispatch(setExpenses(expenses))
		});
	};
};