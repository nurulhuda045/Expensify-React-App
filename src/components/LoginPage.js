import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth';


const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className='box-layout__box'>
			<h1 className='box-layout__title'>Expensify</h1>
			<p className='box-layout__text'>Now the time to expensify your budget.</p>
			<button className='btn btn--blue' onClick={startLogin}>Login</button>
		</div>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);