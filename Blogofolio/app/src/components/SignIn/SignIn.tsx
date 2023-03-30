import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getTokenAsyncAction } from '../../AppGlobalStore/Auth/action'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import style from './SignIn.module.css'


export const SignInPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const fromPage = location.state?.from?.pathname || '/'

	const auth = useSelector((state: AppGlobalState) => state.auth)
	const dispatch = useDispatch()
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const email = e.currentTarget.email.value
		const password = e.currentTarget.password.value
		dispatch(getTokenAsyncAction(email, password, () => navigate(fromPage, { replace: true })))
	}

	// console.log(JSON.stringify(auth, null, 2));
	

	return (
		<div>
			{/* <div>
				{JSON.stringify(auth, null, 2)}
			</div> */}
			<div className={style.nav} onClick={() => navigate('/')}>Back to home</div>
			<title className={style.title}>Sign In</title>
			<form className={style.userform} onSubmit={handleSubmit}>
				<label >
					Email
				</label>
				<input className={style.input} type="email" name="email" placeholder="Your email" />
				<label >
					Password
				</label>
				<input className={style.input} type="password" name="password" placeholder="Your password" />
				<p className={style.forgot}>Forgot password?</p>
				<button className={style.button}> Sign In</button>
				<h6>Don’t have an account? <span onClick={() => navigate('/user')}> Sign Up</span></h6>
			</form>
			<hr />
			<div className='footer-label'>
				<p>
					©2022 Blogfolio
				</p>
				<p>
					All rights reserved
				</p>
			</div >
		</div>
	)
}
