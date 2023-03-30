import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'

export const Home = () => {
	return (
		<Link to="/" className={style.title}>Home</Link>
	)
}
