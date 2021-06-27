import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { v4 as uuidv4 } from 'uuid';


class ExpenseListFilters extends React.Component {

	state = {
		calenderFocused: null
	}
	
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calenderFocused) => {
		this.setState(() => ({calenderFocused}));
	};
	render() {
		return (
			<div>
				<input type='text' placeholder='Ex: Rent' onChange={(e) => {
					this.props.dispatch(setTextFilter(e.target.value))
				}} />
				<select onChange={(e) => {
					e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
				}}>
					<option value='date' >Date</option>
					<option value='amount' >Amount</option>
				</select>
				
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId={uuidv4()}
					endDate={this.props.filters.endDate}
					endDateId={uuidv4()}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		
		);
	}
};



const mapStateToProps = (state) => ({
		filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
