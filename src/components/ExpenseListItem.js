import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom'


const ExpenseListItem = ({id, description, amount, note, createdAt}) => (
	<div>
		<Link to={`/edit/${id}`}>
		<h3>{description}</h3>
		</Link>
		<p>{note}</p>
		<p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
		
	</div>
);

export default ExpenseListItem;