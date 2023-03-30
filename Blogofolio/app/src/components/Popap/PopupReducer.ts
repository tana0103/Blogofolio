export const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'

export interface IPopupState {
	isOpen: boolean,
	post?: {
		id: number
		title: string
		img: string
	}
}

interface IPopupAction {
	type: string,
	post?: {
		id: number
		title: string
		img: string
	}
}

const defaultValue = {
	isOpen: false
}

export const popupReducer = (state: IPopupState = defaultValue, action: IPopupAction): IPopupState => {
	switch (action.type) {
		case OPEN_POPUP:
			return {
				...state,
				isOpen: true,
				post: action.post
			}
		case CLOSE_POPUP:
			return {
				...state,
				isOpen: false,
				post: undefined
			}
		default:
			return state
	}
}