import { createStore } from 'redux';


const store = createStore((state = {count: 0}, action) => {
	switch (action.type) {
	
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;			
			return {
				count: state.count + incrementBy
			}
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy
			}
		case 'RESET':
			return {
				count: 0
			}
		default:
			return state;
	
	}
});

// console.log(store.getState());

// store.dispatch({
// 	type: 'INCREMENT'
// })

// store.dispatch({
// 	type: 'DECREMENT'
// })

// export default store;

// Action Generator functions
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
// 	type: 'INCREMENT',
// 	incrementBy
// })

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
// 	type: 'DECREMENT',
// 	decrementBy
// })

// const setCount = ({count}) => ({
// 	type: 'SET',
// 	count
// })

// const resetCount = () => ({
// 	type: 'RESET'
// })

// const countReducer = (state = {count: 0}, action) => {
// 	switch (action.type) {
	
// 		case 'INCREMENT':			
// 			return {
// 				count: state.count + action.incrementBy
// 			}
// 		case 'DECREMENT':
// 			return {
// 				count: state.count - action.decrementBy
// 			}
// 		case 'SET':
// 			return {
// 				count: action.count
// 			}
// 		case 'RESET':
// 			return {
// 				count: 0
// 			}
// 		default:
// 			return state;
	
// 	}
// };

// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => { console.log(store.getState()); })

// store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch(decrementCount({decrementBy: 4}))

// store.dispatch(setCount({count: 101}))

// store.dispatch(resetCount())
