import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppGlobalState } from '../../AppGlobalStore/globalStore'
import { closeModal, openModal } from './Modal'

type ModalPropsType = {
	children: JSX.Element
}

export const ModalReduxComponent = (props: ModalPropsType) => {
	const state = useSelector((globalState: AppGlobalState) => {
		return globalState.modal
	})
	const dispatch = useDispatch()

	const closeModalWin = useCallback(
		() => {
			dispatch(closeModal())
		},
		[])

	return (
		<div className={state.styleModalWin} onClick={closeModalWin}>
			<div className={state.styleModalContent} onClick={e => e.stopPropagation()}>
				{props.children}
			</div>
		</div >
	)
}
