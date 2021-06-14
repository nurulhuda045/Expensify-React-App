import React from 'react'

import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/expense'

const ExpenseList = (props) => {

	const title = props.expenses.length >= 1 ? 'Expenses List' : 'No Expense'
	return (
		<div>
			<h2>{title}</h2>
			{props.expenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
			})}
		</div>
)};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpense(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpenseList);
