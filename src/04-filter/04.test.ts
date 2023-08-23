import { ages, chipPredicate, courses, predicate } from './04'

test('should take old men older then 90', () => {
	const oldAges = ages.filter(predicate)

	expect(oldAges.length).toBe(1)
	expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
	const chipCourses = courses.filter(chipPredicate)

	expect(chipCourses.length).toBe(2)
	expect(chipCourses[0].title).toBe('CSS')
	expect(chipCourses[1].title).toBe('REACT')
})

test('get only completed tasks', () => {
	const tasks = [
		{ id: 1, title: 'Bread', isDone: false },
		{ id: 2, title: 'Milk', isDone: true },
		{ id: 3, title: 'Salt', isDone: false },
		{ id: 4, title: 'Sugar', isDone: true }
	]

	const completedTasks = tasks.filter((t) => t.isDone)

	expect(completedTasks.length).toBe(2)
	expect(completedTasks[0].id).toBe(2)
	expect(completedTasks[1].id).toBe(4)
})
