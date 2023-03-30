import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { getPosts, IPost } from '../../Services/CardPostService';


export const Post = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const location = useLocation()
	console.log(location)

	useEffect(() => {
		getPosts().then(data => setPosts(data))
	}, [])

	return (
		<>
			<h1>Posts</h1>
			<h3>
				<Link to={'/posts/create'}>Add new post</Link>
			</h3>
			{
				posts.map(post => {
					return (
						<Link key={post.id} to={`/posts/${post.id}`}>
							{post.id}. {post.title}
						</Link>
					)
				})
			}
		</>
	)
}