import { increaseAge, user, users, usersCount } from './09'

test('reference type test', () => {
	expect(user.age).toBe(26)

	increaseAge(user)

	expect(user.age).toBe(27)

	const user2 = user

	user2.age = 30
	expect(user2.age).toBe(30)

	expect(user.age).toBe(30)
})

test('array reference test', () => {
	expect(users.length).toBe(2)

	const admins = users

	const newUser = {
		name: 'Ilya',
		age: 30
	}
	admins.push(newUser)

	expect(users.length).toBe(3)
	expect(users[2]).toEqual({ name: 'Ilya', age: 30 })
})

test('value test', () => {
	expect(usersCount).toBe(100)

	let adminsCount = usersCount

	expect(adminsCount).toBe(100)
	expect(usersCount).toEqual(adminsCount)

	adminsCount = 200

	expect(adminsCount).toBe(200)
	expect(usersCount).toBe(100)
})
