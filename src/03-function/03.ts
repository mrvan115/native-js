import { StudentType } from '../02-objects/02'

export const sum = (a: number, b: number) => {
	return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
	student.technologies.push({
		id: new Date().getTime(),
		title: skill
	})
}

export const makeStudentActive = (student: StudentType) => {
	student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
	return student.address.city.title === city
}
