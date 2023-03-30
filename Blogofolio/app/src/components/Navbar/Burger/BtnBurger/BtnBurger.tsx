import { useState } from 'react'
import { BurgerClose } from '../BurgerClose/BurgerClose'
import { BurgerOpen } from '../BurgerOpen/BurgerOpen'
import style from './BtnBurger.module.css'

export const BtnBurger = () => {
	const [state, setState] = useState(false)
	const clickButton = () => {
		setState(!state)
	}

	return (
		<div onClick={clickButton}>{state ? <BurgerOpen /> : <BurgerClose />}</div>
	)
}