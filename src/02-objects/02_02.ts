export type CityType = {
	title: string
	houses: HousesType[]
	governmentBuildings: governmentType[]
	citizensNumber: number
}

export type HousesType = {
	buildedAt: number
	repaired: boolean
	address: AddressType
}

export type AddressType = {
	number: number
	street: StreetType
}

export type StreetType = {
	title: string
}

export type governmentType = {
	type: string
	budget: number
	staffCount: number
	address: AddressType2
}

export type AddressType2 = {
	street: StreetType
}
