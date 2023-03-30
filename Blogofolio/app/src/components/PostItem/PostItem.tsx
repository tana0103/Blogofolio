import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostById, IPost } from '../../Services/CardPostService'

export const PostItem = () => {
	const params = useParams()
	const value = { title: '' }
	const navigate = useNavigate()
	const [post, setPost] = useState<IPost>({} as IPost)

	useEffect(() => {
		getPostById(params.id).then(data => setPost(data))
	}, [])

	const goBack = () => navigate(-1)
	const goPosts = () => navigate('/posts', { state: '123vasya' })

	if (!post) {
		return (
			<div>Loading...</div>
		)
	}

	return (
		<>
			<button onClick={goBack}>Go back</button>
			<button onClick={goPosts}>Go Posts</button>
			<h1>
				PostItem {params.title}
			</h1>
			<div>
				<img src={post.image} alt="post image" />
			</div>
			<div>
				{post.text}
			</div>
		</>
	)
}
