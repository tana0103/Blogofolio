import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createNewPostAsyncAction } from '../../AppGlobalStore/posts/action'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import './Createpost.css'
import { useNavigate } from 'react-router-dom'

export const CreateMyPost = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [images, setImages] = useState<ImageListType>([])
	const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
		console.log(imageList, addUpdateIndex);
		setImages(imageList as never[]);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		formData.append('title', e.currentTarget.titleText.value)
		formData.append('image', images[0].file || 'testFileName')
		dispatch(createNewPostAsyncAction(formData))
	}

	return (
		<div className='addpost'>
			<div className='buttons'>
				<p className='button' onClick={() => navigate('/')}>Home</p>
				<p className='button'>|</p>
				<p className='button active'>Add post</p>
			</div>
			<h1 className='titlepost'>Add Post</h1>
			<form className='formpost' onSubmit={handleSubmit}>
				<label>
					Title
				</label>
				<input className='inputtitle' type={'text'} name={'titleText'} placeholder={'Astronauts prep for new solar arrays on nearly spacewalk'} />
				<div className='grup'>
					<div className='lesson'>
						<label>
							Lesson Number
						</label>
						<input className='inputlesson' type={'text'} name={'lesson_num'} />
					</div>
					<div className='lesson'>
						<label>
							Description
						</label>
						<input className='inputlesson' type={'text'} name={'description'} placeholder={'Add your text'} />
					</div>
				</div>
				<div className='grup-text'>
					<div className='text'>
						<label>
							Text
						</label>
						<input className='inputtext' type={'text'} name={'text'} placeholder={'Add your text'} />
					</div>
					<div className='img-gr'>
						<label className="grup-img">
							Image
							<ImageUploading value={images} onChange={onChange} >
								{({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
									<div className="upload__image-wrapper">
										<input className='input-upl' type={'button'} onClick={onImageUpload} value="Upload image" />
										{imageList.map((image, index) => (
											<div key={index} className="image-item">
												<img className='img' src={image.dataURL} alt="" width="100" />
												<div className="image-item__btn-wrapper">
													<button className="upload-btn" onClick={() => onImageUpdate(index)}>Update new</button>
													<button className="upload-btn" onClick={() => onImageRemove(index)}>Remove</button>
												</div>
											</div>
										))}
									</div>
								)}
							</ImageUploading>
						</label>
					</div>
				</div>
				<div className='footer-form'>
					<div>
						<button className='delete-btn'>DeletePost
						</button>
					</div>
					<div className='btn-add'>
						<button className='cancel-btn'>Cansel</button>
						<button className='create-btn'>Add Post</button>
					</div>
				</div>
			</form>
			<hr />
			<div className='footer-label'>
				<p>
					©2022 Blogfolio
				</p>
				<p>
					All rights reserved
				</p>
			</div >
		</div>
	)
}