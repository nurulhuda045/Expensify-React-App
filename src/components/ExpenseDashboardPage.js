import React from 'react';
// import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary';


function ExpenseDashboardPage() {

	return(
		<div>
			<ExpenseListFilters/>
			<ExpenseList />
			<ExpensesSummary/>
		</div>
	)
}

export default ExpenseDashboardPage;