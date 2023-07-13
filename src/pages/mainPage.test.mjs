import MainPage from './MainPage'

describe('MainPage', () => {
	let component

	beforeEach(() => {
		component = new MainPage()
	})

	test('handleChange updates searchValue and suggestions correctly', () => {
		const event = { target: { value: 'John' } }
		component.handleChange(event)

		expect(component.searchValue).toBe('JOHN')
		expect(component.suggestions).toEqual([])

		event.target.value = ''
		component.handleChange(event)

		expect(component.searchValue).toBe('')
		expect(component.suggestions).toEqual([])
	})

	test('handleClick removes member with email and updates members correctly', () => {
		component.members = [{ label: 'john@example.com' }, { label: 'jane@example.com' }]

		component.handleClick('john@example.com')

		expect(component.members).toEqual([{ label: 'jane@example.com' }])
	})

	test('handleClick adds value to members and clears value correctly', () => {
		component.value = [{ label: 'newmember@example.com' }, { label: 'anothermember@example.com' }]

		component.handleClick()

		expect(component.members).toEqual([{ label: 'newmember@example.com' }, { label: 'anothermember@example.com' }])
		expect(component.value).toEqual([])
	})
})
