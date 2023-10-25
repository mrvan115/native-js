import {
	makeHairstyle,
	moveUser,
	upgradeUserLaptop,
	UserType,
	UserWithLaptopType
} from './10'

test('reference type test', () => {
	let user: UserType = {
		name: 'Dimych',
		hair: 32,
		address: {
			title: 'Minsk'
		}
	}

	const awesomeUser = makeHairstyle(user, 2)

	user.address.title = 'Kiev'

	expect(user.hair).toBe(32)
	expect(awesomeUser.hair).toBe(16)
	expect(awesomeUser.address).toBe(user.address)
})
test('change address test', () => {
	let user: UserWithLaptopType = {
		name: 'Dimych',
		hair: 32,
		address: {
			title: 'Minsk'
		},
		laptop: {
			title: 'iMac'
		}
	}

	const movedUser = moveUser(user, 'Kiev')

	expect(user).not.toBe(movedUser)
	expect(user.address).not.toBe(movedUser.address)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.title).toBe('Kiev')
})
test('upgrade laptop to macbook', () => {
	let user: UserWithLaptopType = {
		name: 'Dimych',
		hair: 32,
		address: {
			title: 'Minsk'
		},
		laptop: {
			title: 'iMac'
		}
	}

	const userWithUpgrageLaptop = upgradeUserLaptop(user, 'Macbook')

	expect(user).not.toBe(userWithUpgrageLaptop)
	expect(user.laptop).not.toBe(userWithUpgrageLaptop.laptop)
	expect(user.address).toBe(userWithUpgrageLaptop.address)
	expect(userWithUpgrageLaptop.laptop.title).toBe('Macbook')
})
