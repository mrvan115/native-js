type UserType = {
	name: string
	age: number
}

export const user = {
	name: 'Ivan',
	age: 26
}

export const increaseAge = (u: UserType) => {
	u.age++
}

export const users = [
	{ name: 'Ivan', age: 26 },
	{ name: 'Roman', age: 25 }
]

export let usersCount = 100
