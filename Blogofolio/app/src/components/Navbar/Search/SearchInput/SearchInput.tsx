import { useContext, useEffect } from 'react'
import { SearchContext } from '../../../../Layout/Layout'
import style from './SearchInput.module.css'

export const SearchInput = () => {
	const [context, setContext] = useContext(SearchContext)
	const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {

		const currentValue = e.currentTarget.value
		setContext({
			...context,
			value: currentValue
		})
	}

	// console.log('инпут:' + context.value);

	return (
		<input type='search' placeholder={'Search'} className={style.search} value={context.value} onChange={searchValue}>
		</input>
	)
}