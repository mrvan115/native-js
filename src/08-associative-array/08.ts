type UsersType = {
	[key: string]: { id: number; name: string }
}

const users: UsersType = {
	'101': { id: 101, name: 'Dimych' },
	'3232312': { id: 3232312, name: 'Natasha' },
	'1212': { id: 1212, name: 'Valera' },
	'1': { id: 1, name: 'Katya' }
}
//find
//users[1]

//add
// let user = { id: 100500, name: 'Igor' }
// users[user.id] = user

//delete
// delete users[user.id]

//refresh
// users[user.id].name = 'Vitya'

export const usersArray = [
	{ id: 101, name: 'Dimych' },
	{ id: 3232312, name: 'Natasha' },
	{ id: 1212, name: 'Valera' },
	{ id: 1, name: 'Katya' }
]

//find
//usersArray.find((u) => u.id === 1)

//add
// let usersCopy = [...usersArray.filter(), user]

//delete
// let usersArray = usersArray.filter(u => u.id !== user.id)
