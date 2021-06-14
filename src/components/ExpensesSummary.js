import React from 'react'
import {connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expense-total'
import selectExpense from '../selectors/expense'


const ExpensesSummary = (props) => (
	<div>
		<h3>Total of {props.expenseCount} Expenses: {numeral(expensesTotal(props.expenses) / 100 ).format('$0,0.00')}</h3>
	</div>
)

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpense(state.expenses, state.filters)
	return {
		expenses: visibleExpenses,
		expenseCount: visibleExpenses.length
	}
}

export default connect(mapStateToProps)(ExpensesSummary);