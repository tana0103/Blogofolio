import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearTokens } from '../../AppGlobalStore/Auth/action'
import { clearUserMe } from '../../AppGlobalStore/UserMe/action'
import style from './LogOut.module.css'

export const LogOut = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logOut = () => {
		dispatch(clearTokens())
		dispatch(clearUserMe())
		navigate('/')
	}

	return (
		<div className={style.link} onClick={logOut}>Log Out</div>
	)
}
