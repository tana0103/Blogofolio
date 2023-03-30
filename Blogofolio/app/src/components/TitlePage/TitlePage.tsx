import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ShowCardAll } from '../ShowCardAll/ShowCardAll'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { Pagination } from '../Pagination/Pagination'
import { changeTabAction, fetchPostAsyncAction } from '../../AppGlobalStore/PostReducer/PostReducer'
import style from './TitlePage.module.css'

export const TitlePage = () => {

	const dispath = useDispatch()
	const setNameTab = (tab: string) => {
		dispath(changeTabAction(tab))
		dispath(fetchPostAsyncAction(11, Math.floor(Math.random() * 100)))
	}
	useEffect(() => {
		setNameTab("All")
	}, [])
	return (
		<div>
			<div className={style.list}>
				<div className={style.tab} onClick={() => setNameTab("All")}>All</div>
				<div className={style.tab} onClick={() => setNameTab("My favorites")} >My favorites</div>
				<div className={style.tab} onClick={() => setNameTab("Popular")} >Popular</div>
			</div>
			<div>
				<ShowCardAll />
			</div>
			<Pagination />
		</div>
	)
}
