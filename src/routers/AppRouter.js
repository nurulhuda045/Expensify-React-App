import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
		<Router history={history} >
		<Switch>
			<PublicRoute exact path="/" component={LoginPage}/>
			<PublicRoute path="/help" component={HelpPage} />
			<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
			<PrivateRoute path="/create" component={AddExpensePage} />
			<PrivateRoute path="/edit/:id" component={EditExpensePage} />
			<Route component={NotFoundPage} />
		</Switch>
		</Router>
);
  
  export default AppRouter;