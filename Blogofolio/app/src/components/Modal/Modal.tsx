import React from 'react'
import './Modal.css'

const OPEN_MODAL = "OPEN_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"

interface IModalWin {
	styleModalWin: string
	styleModalContent: string
}

interface IActionModal {
	type: "OPEN_MODAL" | "CLOSE_MODAL"
}
export const openModal = (): IActionModal => {
	return {
		type: OPEN_MODAL
	}
}

export const closeModal = (): IActionModal => {
	return {
		type: CLOSE_MODAL
	}
}

const defoltState: IModalWin = {
	styleModalWin: "modal",
	styleModalContent: "modalcontent",
	// children: <p>Приветик</p>
}

export const modalWinReducer = (state: IModalWin = defoltState, action: IActionModal) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				styleModalWin: state.styleModalWin = "modal active",
				styleModalContent: state.styleModalContent = "modalcontent active"
			}
		case CLOSE_MODAL:
			return {
				...state,
				styleModalWin: state.styleModalWin = "modal",
				styleModalContent: state.styleModalContent = "modalcontent"
			}
		default:
			return state
	}
}