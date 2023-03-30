import React, { useContext, useState } from 'react'
import { PostType } from '../../Tools/types'
import { SearchContext } from '../../Layout/Layout'
import { GetPostSearch } from '../../Services/CardPostService'
import { ShowCardsSearch } from '../ShowCard/ShowCardsSearch'
import style from './ShowCardSearch.module.css'

export const ShowCardSearch = () => {
	const [state, setState] = useState<PostType[]>([])
	const [context, setContext] = useContext(SearchContext)
	
	if (context.onClick) {
		GetPostSearch(context.value)
			.then((posts: PostType[]) => {
				setState(posts)
				setContext({
					...context,
					onClick: false
				})
			})
	}

	return (
		<div className={style.cardsearch} >
			{state.map(post =>
				(<ShowCardsSearch element={post} key={post.id} />)
			)}
		</div>
	)
}
