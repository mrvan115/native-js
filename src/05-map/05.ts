export type ManType = {
	name: string
	age: number
}

let people: ManType[] = [
	{ name: 'Andrew Ivanov', age: 33 },
	{ name: 'Alexander Petrov', age: 24 },
	{ name: 'Dmitry Sidorov', age: 18 }
]

const dimychTranformator = (man: ManType) => {
	return {
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: man.name.split(' ')[0],
		lastName: man.name.split(' ')[1]
	}
}

const devs = [
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Andrey',
		lastName: 'Ivanov'
	},
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Alexander',
		lastName: 'Petrov'
	},
	{
		stack: ['css, html', 'js', 'tdd', 'react'],
		firstName: 'Dmitry',
		lastName: 'Sidorov'
	}
]

const devs2 = [
	dimychTranformator(people[0]),
	dimychTranformator(people[1]),
	dimychTranformator(people[2])
]

const devs3 = people.map(dimychTranformator)

const messages = people.map(
	(man) => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`
)

export const createGreetingMessages = (people: ManType[]) => {
	return people.map(
		(man) => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`
	)
}
