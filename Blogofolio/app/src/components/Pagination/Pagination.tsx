import  { useState, useEffect } from 'react';
import React from 'react'
import './pagination.css'
import { fetchPostAsyncAction } from '../../AppGlobalStore/PostReducer/PostReducer';
import { useDispatch } from 'react-redux';

type StateType = number|string

export const Pagination = () => {
	const pages = 10
	const numberOfPages:number[] = []
	for (let i = 1; i <= pages; i++){
		numberOfPages.push(i)
	}
// console.log(numberOfPages)

	const [currentButton, setCurrentButton] = useState<StateType>(1)
	const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		const limit = 12
		const offset = (+currentButton - 1) * 12
		dispatch(fetchPostAsyncAction(limit, offset))
	}, [currentButton,dispatch, fetchPostAsyncAction])
	

	useEffect(() => {
		let tempNumberOfPages: any = [...arrOfCurrButtons]
		let dotsInitial = '...'
		let dotsLeft = '... '
		let dotsRight = ' ...'

		if (currentButton >= 1 && currentButton <= 3) {
			tempNumberOfPages=[1,2,3,4,dotsInitial, numberOfPages.length]
		}
		else if (currentButton === 4) {
			const sliced = numberOfPages.slice(0, 5)
			tempNumberOfPages= [...sliced,dotsInitial,numberOfPages.length]
		}
		else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
			const sliced1 = numberOfPages.slice(+currentButton - 2, +currentButton)
			const sliced2 = numberOfPages.slice(+currentButton, +currentButton + 1)
			tempNumberOfPages=([1, dotsLeft, ...sliced1,...sliced2,dotsRight,numberOfPages.length])
		}
		else if (currentButton > numberOfPages.length - 3) {
			const sliced = numberOfPages.slice(numberOfPages.length - 4)
			tempNumberOfPages = ([1, dotsLeft, ...sliced])
		}
		else if (currentButton == dotsInitial) {
			setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3]+1)
		}
		else if (currentButton == dotsRight) {
			setCurrentButton(arrOfCurrButtons[3] + 2)
		}
		else if (currentButton == +dotsRight) {
			setCurrentButton(arrOfCurrButtons[3] - 2)
		}
		setArrOfCurrButtons(tempNumberOfPages)
	}, [currentButton])
	
	
	return (

		<div className='pagination-container' >
			<span className={`${currentButton===1?'disabled':''}`}
			onClick={()=>setCurrentButton((prev)=> prev===1?prev:+prev-1)}>Prev</span>
			{/* <a href='!#' className='active'>1</a> */}
			{arrOfCurrButtons.map((page,index) => {
				return (
					<span
						key={index}
						className={currentButton === page ? 'active' : ''}
					onClick={()=>setCurrentButton(page)}>{page}</span>
				)
			})}
			
			
			{/* <a href='!#' >2</a>
			<a href='!#' >3</a>
			<a href='!#' >4</a> */}
			<span
				className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
				onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : +prev + 1)}>Next</span>
		</div>
  )
}