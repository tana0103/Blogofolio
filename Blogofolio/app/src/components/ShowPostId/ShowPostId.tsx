import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GetPostId } from '../../Services/CardPostService'
import { PostType } from '../../Tools/types'
import style from './ShowPostId.module.css'

export const ShowPostId = () => {
	const location = useLocation()
	const [state, setState] = useState<PostType>({}as PostType)

	useEffect(() => {
		GetPostId(location.state)
			.then((posts: PostType) => {
				setState(posts)
			})
	}, [location.state])
	
  return (
	  <div>
		  <div className={style.cardtitle}>
			  	<div className={style.avatarid}>
				  <img className={style.imgid} src={state.image} alt=''/>
			  </div>
			  <div className={style.contentid}>
				  <p>{state.date}</p>
				  <h1>{state.title}</h1>
				  <p>{state.text}</p>
			  </div>
		  </div>
	  </div>
  )
}
