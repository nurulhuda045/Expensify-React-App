import React from 'react';
import { connect } from 'react-redux'
import { addExpense } from '../actions/expense';
import ExpenseForm from './ExpenseForm';


const AddExpensePage = (props) => (
	<div>
		Add Expenses
		<ExpenseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense))
				props.history.push('/')
			}}
		/>
	</div>
)

export default connect()(AddExpensePage);