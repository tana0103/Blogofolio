import style from './BtnName.module.css'
type BtnUserType = {
	name: string
}

export const BtnName = (props: BtnUserType) => {
	return (
		<button className={style.btnuser}>
			{props.name}
		</button>
	)
}