import React from 'react'
import {connect } from 'react-redux'
import numeral from 'numeral'
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expense-total'
import selectExpense from '../selectors/expense'


const ExpensesSummary = (props) => {

	const expenseWord = props.expenses.length > 1 ? 'expenses' : 'expense'
	return (
			<div className='page-header'>
				<div className='content-container'>
					<h1 className='page-header__title'>
						Total of <span className='bold-text'>{props.expenseCount}</span> {expenseWord}: <span className='bold-text'>{numeral(expensesTotal(props.expenses) / 100 ).format('$0,0.00')}</span>
					</h1>
					
					<div className="page-header__actions">
						<Link className='link link--blue' to='/create'>Add Expense</Link>
					</div>
				</div>
			</div>
)}

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpense(state.expenses, state.filters)
	return {
		expenses: visibleExpenses,
		expenseCount: visibleExpenses.length
	}
}

export default connect(mapStateToProps)(ExpensesSummary);