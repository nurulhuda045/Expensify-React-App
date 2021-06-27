import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


function Header({ startLogout }) {
	return(
		<header>
			<h1>Expensify</h1>
			<NavLink activeClassName="isActive" to="/dashboard" >Dashboard</NavLink>
			<NavLink activeClassName="isActive" to="/create" >Create</NavLink>
			<NavLink activeClassName="isActive" to="/help" >Help</NavLink>
			<button onClick={startLogout}>Logout</button>
		</header>
	)
};


const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);