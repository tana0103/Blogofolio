import React from 'react'
import style from './Tabs.module.css'

export interface ITab {
	id: string | number,
	label?: string | number
}
export interface ITabsProps {
	className?: string,
	selectedId: string | number,
	tabs: ITab[],
	onClick?: (id: string | number) => void
}
export const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
	return (
		<div className={props.className}>
			{props.tabs && props.tabs.map(tab => (
				<div>
					<div className={props.className}>
						{tab.label}
					</div>
				</div>
			))}
		</div>
	)
}
