import React from 'react';
// import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'


function ExpenseDashboardPage() {

	return(
		<div>
			<ExpenseListFilters/>
			<ExpenseList />
			{/* <Link to="/edit/1">Item 1</Link>
			<Link to="/edit/2">Item 2</Link>
			<Link to="/edit/3">Item 3</Link> */}
		</div>
	)
}

export default ExpenseDashboardPage;