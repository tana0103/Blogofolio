import style from './Nav.module.css';
import { SearchInput } from './Search/SearchInput/SearchInput';
import { GlassDiv } from './Search/BtnGlass/BtnGlass';
import { useState } from 'react';
import { MenuOpen } from './MenuOpen/MenuOpen';
import { NameDiv } from './NameDiv/NameDiv';
import { BtnBurger } from './Burger/BtnBurger/BtnBurger';

export const Navbar = () => {
	const [state, setState] = useState(false)
	const openMenu = () => {
		setState(!state)
	}

	return (
		<div>
			<div className={style.menu} >
				<div onClick={openMenu} className={style.burgermenu}><BtnBurger /></div>
				<div className={style.search}><SearchInput></SearchInput></div>
				<div className={style.glass}><GlassDiv></GlassDiv></div>
				<div className={style.user}><NameDiv user={'Artem Malkin'} /></div>
			</div>
			<div style={state ? { display: 'block' } : { display: 'none' }}>
				<MenuOpen />
			</div>
		</div>
	)
}