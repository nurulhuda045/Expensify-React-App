import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expense'



export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.dispatch(startEditExpense(this.props.expense.id, expense))
		this.props.history.push('/')
	};
	onRemove = () => {
		console.log(typeof(this.props.expense.id))
		this.props.dispatch(startRemoveExpense(this.props.expense.id))
		this.props.history.push('/')
	}
	render() {
		return (
			<div>
				<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
				</div>
				<div className="content-container">
					<ExpenseForm
						expense={this.props.expense}
						onSubmit={this.onSubmit}
					/>
					<button className="btn btn--red btn--remove" onClick={this.onRemove}>Remove Expense</button>
				</div>
			</div>
		);
	}
};



const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	}
}

export default connect(mapStateToProps)(EditExpensePage);