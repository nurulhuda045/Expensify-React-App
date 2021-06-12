
// Set Filter Text
export const setTextFilter = (text= '') => ({
	type: 'SET_Text_FILTER',
	text
})

// Sort By Date
export const sortByDate = () => ({
	type: 'SET_SORT_BY',
	value: 'date'
})

// Sort By Amount
export const sortByAmount = () => ({
	type: 'SET_SORT_BY',
	value: 'amount'
})

// Set End Date
export const setEndDate = (date) => ({
	type: 'SET_END_DATE',
	date
})

// Set Start Date
export const setStartDate = (date) => ({
	type: 'SET_START_DATE',
	date
})
