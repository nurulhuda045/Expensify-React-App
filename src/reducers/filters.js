import moment from "moment";

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_Text_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.value
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.date
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.date
			}
		default:
			return state
			
	}
}

export default filtersReducer;