import style from './BtnGlass.module.css'
import { BtnGlass } from './Glass/Glass'

export const GlassDiv = () => {
	return (
		<div className={style.glassdiv}>
			<BtnGlass></BtnGlass>
		</div>
	)
}