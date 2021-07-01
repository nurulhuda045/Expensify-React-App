import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/styles.scss';
import AppRouter, {history} from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'
import { firebase } from '../src/firebase/firebase'
import { startSetExpenses } from './actions/expense';
import {login, logout } from './actions/auth'

import LoadingPage from '../src/components/LoadingPage'

const store = configureStore()
startSetExpenses()

const jsx = (
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter/>
		</Provider>
	</React.StrictMode>
);

let hasRendered = false;
const renderApp = () => {
	if(!hasRendered) {
		ReactDOM.render(jsx ,document.getElementById('root'));
		hasRendered = true;
	} 
}

ReactDOM.render(<LoadingPage /> ,document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpenses()).then(() => {
			renderApp()
			if(history.location.pathname === '/') {
				history.push('/dashboard')
			}
		});
	} else {
		console.log('logout')
		store.dispatch(logout())
		renderApp()
		history.push('/')
	}
})

