import { useSelector } from "react-redux"
import { AppGlobalState } from "../../AppGlobalStore/globalStore"
import { ShowCard } from "../ShowCard/ShowCard"
import { ShowCard2 } from "../ShowCard/ShowCard2"
import { ShowCardsSearch } from "../ShowCard/ShowCardsSearch"
import { ShowCardSearch } from "../ShowCardSearch/ShowCardSearch"
import style from './ShowCardAll.module.css'

export const ShowCardAll = () => {
	const favoriteposts = useSelector((state: AppGlobalState) => state.myFavoritePosts)
	const tabName = useSelector((state: AppGlobalState) => state.post.tabTitle)
	const posts = useSelector((state: AppGlobalState) => state.post)

	let card1 = posts.posts ? posts.posts.slice(0, 6) : []
	let card2 = posts.posts ? posts.posts.slice(6, 12) : []
	if (tabName == 'My favorites') {
		const favorite = favoriteposts.posts ? favoriteposts.posts.slice(0, 10) : []
		return (
			<div className={style.cardsearch}>
				{favorite.map(post => <ShowCardsSearch element={post} key={post.id} />)}
			</div>
		)
	}

	return (
		<div className={style.all}>
			<div className={style.posts}>
				<div className={style.posts1}>
					<div className={style.cardall}>
						{card1.map(post => <ShowCard2 element={post} key={post.id} />)}
					</div>
				</div>
				<div className={style.posts2}>
					{card2.map(post => <ShowCard element={post} key={ post.id} />)}
				</div>
			</div>
		</div>
	)
}