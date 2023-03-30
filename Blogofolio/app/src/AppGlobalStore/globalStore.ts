import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modalWinReducer } from '../components/Modal/Modal';
import { popupReducer } from '../components/Popap/PopupReducer';
import { postReducer } from './PostReducer/PostReducer';
import thunkMiddleware from 'redux-thunk'
import { activateReducer, registerReducer } from './Register/reducer';
import { authReducer } from './Auth/reducer';
import { myPostReducer } from './posts/reducer';
import { myFavoritePostsReducer } from './MyFavoritePost/reducer';
import { getUserMeReducer } from './UserMe/reducer';

export const globalReducer = combineReducers({
	modal: modalWinReducer,
	popup: popupReducer,
	post: postReducer,
	register: registerReducer,
	activate: activateReducer,
	auth: authReducer,
	myPosts: myPostReducer,
	myFavoritePosts: myFavoritePostsReducer,
	userName: getUserMeReducer
})

export const globalStore = configureStore({
	reducer: globalReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppGlobalState = ReturnType<typeof globalStore.getState>
export type AppGlobalDispatch = typeof globalStore.dispatch