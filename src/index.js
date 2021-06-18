import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import configureStore from '../src/store/configureStore'
import '../src/firebase/firebase'
import { startSetExpenses } from './actions/expense';

const store = configureStore()
startSetExpenses()

const jsx = (
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter/>
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(<p>Loading...</p> ,document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx ,document.getElementById('root'));
});

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
