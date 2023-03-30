import style from './BtnSearch.module.css'
type BtnSearchType = {
	title: string
}

export const BtnSearch = (props: BtnSearchType) => {
	return (
		<button className={style.btnsearch}>
			{props.title}
		</button>
	)
}