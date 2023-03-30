import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { SearchInput } from '../components/Navbar/Search/SearchInput/SearchInput';
import { NameDiv } from '../components/Navbar/NameDiv/NameDiv';
import style from './Layout.module.css'
import { MenuOpen } from '../components/Navbar/MenuOpen/MenuOpen';
import './Layout.css'
import { BtnGlass } from '../components/Navbar/Search/BtnGlass/Glass/Glass';
import { BtnBurger } from '../components/Navbar/Burger/BtnBurger/BtnBurger';
import { UserBtn } from '../components/Navbar/UserBtn/UserBtn';
import { Popup } from '../components/Popap';
import { useSelector } from 'react-redux';
import { AppGlobalState } from '../AppGlobalStore/globalStore';

type ThemeType = {
	active: 'light' | 'dark'
}

const theme: ThemeType = {
	active: 'light'
}

type ContextType = [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>]
export const ThemeContext = React.createContext<ContextType>([{}, {}] as ContextType)

type SearchType = {
	value: string
	onClick: boolean
}

type SearchContextType = [SearchType, React.Dispatch<React.SetStateAction<SearchType>>]
export const SearchContext = React.createContext<SearchContextType>([{}, {}] as SearchContextType)

export const Layout = () => {
	const userName = useSelector((state: AppGlobalState) => state.userName)
	// console.log(userName);
	// console.log(userName.username)

	const [state, setState] = useState(theme)
	const [valueInput, setValueInput] = useState<SearchType>({ value: '', onClick: false })
	const [stateOpenMenu, setStateOpenMenu] = useState(false)
	const menuClassName = state.active

	const openMenu = () => {
		setStateOpenMenu(!stateOpenMenu)
	}

	const userIcon = () => {
		if ('' || !userName.username) {
			return <UserBtn />
		} else {
			return <NameDiv name={userName.username.slice(0, 1).toLocaleUpperCase()} user={userName.username} />
		}
	}

	return (
		<ThemeContext.Provider value={[state, setState]}>
			<SearchContext.Provider value={[valueInput, setValueInput]}>
				<div>
					<header>
						<nav className={style.menu} >
							<div className={style.burgermenu} onClick={openMenu}><BtnBurger /></div>
							<NavLink to='/search' className={style.search}><SearchInput /></NavLink>
							<NavLink to='/search' className={style.glass}><BtnGlass /></NavLink>
							<NavLink to='/login' className={style.user}>{userIcon}</NavLink>
						</nav>

						<nav>
							<div className={style.menuopen} style={stateOpenMenu ? { display: 'block' } : { display: 'none' }}><MenuOpen /></div>
						</nav>
						<Popup />
					</header>

					<main className={menuClassName}>
						<Outlet />
					</main>
				</div>
			</SearchContext.Provider>
		</ThemeContext.Provider>
	)
}
