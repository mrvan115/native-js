export let props = {
	name: 'Dimych',
	age: 32,
	lessons: [{ title: '1' }, { title: '2' }],
	address: {
		street: {
			title: 'Nezavisimosti street'
		}
	}
}

export type ManType2 = {
	name: string
	age: number
	lessons: Array<{ title: string }>
	address: {
		street: {
			title: string
		}
	}
}
