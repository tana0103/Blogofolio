import style from './Title.module.css'

type Titletype = {
	title: string
	style?: {}
}

export const Title = (props: Titletype) => {
	return (
		<div className={style.title}>
			{props.title}
		</div>
	)
}