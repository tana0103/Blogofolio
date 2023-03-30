import { useContext } from "react"
import { useSelector } from "react-redux"
import { AddPost } from "../../AddPost/AddPost"
import { AppGlobalState } from "../../../AppGlobalStore/globalStore"
import { Home } from "../../Home/Home"
import { ThemeContext } from "../../../Layout/Layout"
import { LogOut } from "../../LogOut/LogOut"
import { DarkBtn } from "../../ThemeBtn/Dark"
import { LightBtn } from "../../ThemeBtn/Light"
import { NameDiv } from "../NameDiv/NameDiv"
import { UserBtn } from "../UserBtn/UserBtn"
import style from './MenuOpen.module.css'

export const MenuOpen = () => {
	const userName = useSelector((state: AppGlobalState) => state.userName)
	// console.log(userName);
	const theme = useContext(ThemeContext)
	const [state, setState] = theme

	const changeTheme = () => {
		setState({
			...state,
			active: state.active === 'dark' ? 'light' : 'dark'
		})
	}

	const userIcon = () => {
		if ('' || !userName.username) {
			return <UserBtn />
		} else {
			return <NameDiv name={userName.username.slice(0, 1).toLocaleUpperCase()} user={userName.username} />
		}
	}

	return (
		<div className={style.menuopen}>
			<div className={style.divname}>{userIcon()}</div>
			<div className={style.divhome}><Home /></div>
			<div className={style.divaddpost}><AddPost /></div>
			<div className={style.divtheme}>
				<LightBtn active={state.active === 'light'} changeColorTheme={changeTheme} />
				<DarkBtn active={state.active === 'dark'} changeColorTheme={changeTheme} />
			</div>
			<div className={style.divlogout}><LogOut /></div>
		</div>
	)
}