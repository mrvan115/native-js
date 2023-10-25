export type UserType = {
	name: string
	hair: number
	address: { title: string }
}
export type LaptopType = {
	title: string
}
export type UserWithLaptopType = UserType & {
	laptop: LaptopType
}

export const makeHairstyle = (u: UserType, power: number) => {
	const copy = {
		...u,
		hair: u.hair / power
	}

	return copy
}
export const moveUser = (u: UserWithLaptopType, city: string) => {
	return { ...u, address: { ...u.address, title: city } }
}
export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) => {
	return { ...u, laptop: { ...u.laptop, title: title } }
}
