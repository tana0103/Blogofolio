import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppGlobalState } from '../../AppGlobalStore/globalStore';
import { addMyFavoritePost } from '../../AppGlobalStore/MyFavoritePost/action';
import { PostType } from '../../Tools/types';
import { OPEN_POPUP } from '../Popap/PopupReducer';
import style from './ShowCard.module.css'


type PropType = {
	element: PostType
}

export const ShowCard2 = (props: PropType) => {
	const postData = {
		id: props.element.id,
		title: props.element.title,
		img: props.element.image
	}

	const dispatch = useDispatch()
	const handleShowPopup = () => {
		dispatch({
			type: OPEN_POPUP,
			post: postData
		})
	}

	const favoritePost = useSelector((state: AppGlobalState) => state.myFavoritePosts)
	const addMyFavoritePostClick = () => {
		dispatch(addMyFavoritePost(props.element))
	}

	const [count, setCount] = useState(0)
	const clickLike = () => {
		setCount(count + 1)
	}
	const clickDislike = () => {
		setCount(count - 1)
	}

	return (
		<div className={style.post2}  >
			<div className={style.img2} >
				<img src={props.element.image} className={style.avatar} onClick={handleShowPopup} />
			</div>
			<h5> {props.element.date}</h5>
			<h1 className={style.title}>{props.element.title}</h1>
			<title>{props.element.text}</title>
			<div className={style.icon}>
				<div className={style.button}>
					<button onClick={clickLike}>
						<svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M18.292 19.15C18.218 19.636 17.794 20 17.292 20H17.28H7V10.212L10.608 2.094C11.415 2.352 12 3.108 12 4V8C12 8.552 12.447 9 13 9H18.674C18.728 9.002 18.78 9.003 18.832 9.011C19.097 9.051 19.33 9.192 19.488 9.407C19.646 9.622 19.712 9.885 19.672 10.148L18.292 19.15ZM5 20H3C2.449 20 2 19.551 2 19V12C2 11.448 2.449 11 3 11H5V20ZM21.099 8.22C20.623 7.575 19.925 7.154 19.132 7.033C18.972 7.009 18.814 7.004 18.66 7H14V4C14 1.794 12.206 0 10 0C9.605 0 9.247 0.233 9.086 0.593L5.35 9H3C1.346 9 0 10.345 0 12V19C0 20.654 1.346 22 3 22H17.269H17.304C18.776 22 20.048 20.909 20.269 19.451L21.648 10.45C21.77 9.657 21.574 8.866 21.099 8.22Z" fill="#313037" />
						</svg>
						{count}
					</button>
					<button onClick={clickDislike}>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M20.6829 10.924C20.5699 11.552 20.0129 12.013 19.3529 12.001H17.6829V3.001H19.3709C20.0129 2.952 20.5689 3.448 20.6829 4.077V10.924ZM15.6829 12.788L12.0749 20.906C11.2679 20.648 10.6829 19.891 10.6829 19.001V15.001C10.6829 14.448 10.2349 14.001 9.68294 14.001H4.01394C3.96794 13.998 3.90694 13.999 3.84994 13.99C3.30494 13.907 2.92894 13.396 3.01094 12.852L4.39194 3.851C4.46594 3.361 4.91794 3.022 5.40294 3.001H15.6829V12.788ZM22.6739 3.866C22.4519 2.223 21.0469 1 19.4109 1C19.3919 1 19.3719 1 19.3529 1.001H5.41394C3.92694 1.011 2.63694 2.081 2.41494 3.549L1.03394 12.551C0.786937 14.186 1.91494 15.718 3.54694 15.966C3.70694 15.991 3.86994 16.003 4.02294 16.001H8.68294V19.001C8.68294 21.207 10.4769 23.001 12.6829 23.001C13.0789 23.001 13.4359 22.768 13.5969 22.407L17.3319 14.001H19.3349C21.0049 14.006 22.4489 12.798 22.6739 11.135C22.6799 11.091 22.6829 11.046 22.6829 11.001V4.001C22.6829 3.956 22.6799 3.911 22.6739 3.866Z" fill="#313037" />
						</svg>
					</button>
				</div>
				<div className={style.svg} onClick={addMyFavoritePostClick}>
					<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z" fill="#313037" />
					</svg>
					...
				</div>
			</div>
		</div >
	)
}