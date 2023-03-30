import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { AppGlobalState } from '../AppGlobalStore/globalStore'

interface IProps {
	children: JSX.Element 
}

export const RequireAuth = (props: IProps) => {
	const location = useLocation()
	const autorizacia = useSelector((state: AppGlobalState) => state.userName)
	if (!autorizacia.username) {
		return <Navigate to='/login' state={{ from: location }} />
	} else {
		return props.children
	}
}