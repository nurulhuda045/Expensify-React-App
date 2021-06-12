import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
	return(
		<header>
			<h1>Expensify</h1>
			<NavLink activeClassName="isActive" to="/" exact={true}>Home</NavLink>
			<NavLink activeClassName="isActive" to="/create" >Create</NavLink>
			<NavLink activeClassName="isActive" to="/help" >Help</NavLink>
		</header>
	)
}

export default Header;