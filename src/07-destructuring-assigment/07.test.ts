import { ManType2, props } from './07'
import { ManType } from '../05-map/05'

let propsForTest = props
beforeEach(() => {
	propsForTest = {
		name: 'Dimych',
		age: 32,
		lessons: [{ title: '1' }, { title: '2' }],
		address: {
			street: {
				title: 'Nezavisimosti street'
			}
		}
	}
})

test('', () => {
	const { age, lessons } = props
	const { title } = props.address.street

	expect(age).toBe(32)
	expect(lessons.length).toBe(2)
	expect(title).toBe('Nezavisimosti street')
})

test('', () => {})

test('', () => {
	const l1 = propsForTest.lessons[0]
	const l2 = propsForTest.lessons[1]

	const [ls1, ls2] = props.lessons

	expect(l1.title).toBe('1')
	expect(l2.title).toBe('2')
})
