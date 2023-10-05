import React, { FC } from 'react'
import { ManType2 } from './07'

type ManComponentPropsType = {
	title: string
	man: ManType2
	food: Array<string>
	car: { model: string }
}

export const ManComponent: FC<ManComponentPropsType> = ({
	title,
	man,
	...props
}) => {
	return (
		<div>
			<h1>{title}</h1>
			<hr />
			<div>{props.car.model}</div>
			<div>{man.name}</div>
		</div>
	)
}
