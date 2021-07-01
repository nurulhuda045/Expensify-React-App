import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setStartDate, setEndDate } from '../actions/filters'
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
			<div className="content-container">
				<div className="input-group">
				<div className="input-group__item">
					<input
					type="text"
					className="text-input"
					placeholder="Search expenses"
					value={this.props.filters.text}
					onChange={this.onTextChange}
					/>
				</div>
				<div className="input-group__item">
					<select
					className="select"
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
					>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
					</select>
				</div>
				<div className="input-group__item">
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
				</div>
			</div>
		
		);
	}
};



const mapStateToProps = (state) => ({
		filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
