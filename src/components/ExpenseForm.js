import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			description: this.props.expense? this.props.expense.description : '',
			note: this.props.expense? this.props.expense.note : '',
			amount: this.props.expense? (this.props.expense.amount / 100).toString() : '',
			createdAt: this.props.expense? moment(this.props.expense.createdAt) : moment(),
			calenderFocused: false,
			error: ''
		};
	}
	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({description}))
	};
	onNoteChange = (e) => {
		const note = e.target.value
		this.setState(() => ({note}))
	};
	onAmountChange = (e) => {
		const amount = e.target.value
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({amount}))
		}
	};
	onDateChange = (createdAt) => {
		if(createdAt) {
			this.setState(() => ({ createdAt }))
		}
	};
	onFocusChange = ({focused}) => {
		this.setState(() => ({ calenderFocused: focused }))
	};
	onSubmit = (e) => {
		e.preventDefault()

		if(!this.state.description || !this.state.amount) {
			// error
			this.setState(() => ({ error: 'Please provide description and amount.' }))
		} else {
			this.setState(() => ({error: ''}))
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				note: this.state.note,
				createdAt: this.state.createdAt.valueOf()
			})
		}
	}
	render() {
		return (
				<form className='form' onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
						className='text-input'
						type='text' 
						placeholder="Description"
					 	autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					 />
					<input
						className='text-input'
						type='number' 
						placeholder="Amout"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={()=> false}
					/>
					<textarea
						className='textarea'
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button className='btn btn--blue'>Save Expense</button>
				</form>
		)
	}
	
}
