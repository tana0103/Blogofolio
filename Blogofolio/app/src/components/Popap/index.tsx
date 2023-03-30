import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import './popup.css'
import { CLOSE_POPUP } from './PopupReducer'

const getPopupStateSelector = (state: AppGlobalState) => state.popup
export const Popup = () => {
	const popupState = useSelector(getPopupStateSelector)
	const dispatch = useDispatch()
	if (!popupState.isOpen) {
		return null
	}

	const handleShowPopup = () => {
		dispatch({
			type: CLOSE_POPUP
		})
	}

	return (
		<div className='wrapper' onClick={handleShowPopup}>
			<div className='content'>
				<img src={popupState.post?.img} className='picture' />
			</div>
		</div>
	)
}
