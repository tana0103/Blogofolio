import { useState, useEffect} from "react"
import { PostType } from "../../Tools/types"
import { GetPostList } from "../../Services/CardPostService"
import { ShowCard1 } from "../ShowCard/ShowCard1"
import style from './ShowCardTitle.module.css'

export const ShowCardTitle = () => {
	const [getState, setState] = useState<PostType[]>([])
	
	useEffect(() => {
		GetPostList(2)
			.then((posts: PostType[]) => {
				setState(posts)
			})
	}, [])

	return (
		<div>
			<div className={style.cardtitle}>
				{getState.map(post =>
					(<ShowCard1 element={post} key={post.id} />)
				)}
			</div>
		</div>
	)
}