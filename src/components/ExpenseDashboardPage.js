import React from 'react';
// import { Link } from 'react-router-dom';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'


function ExpenseDashboardPage() {

	return(
		<div>
			<ExpensesSummary/>
			<ExpenseListFilters/>
			<ExpenseList />
		</div>
	)
}

export default ExpenseDashboardPage;