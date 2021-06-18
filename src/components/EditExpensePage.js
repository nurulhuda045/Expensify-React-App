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
				<h2>This is to edit your expense for {this.props.match.params.id}.</h2>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.onRemove} >Remove expense</button>
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