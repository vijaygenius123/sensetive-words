import sensetiveWords from '.'

test('it should replace blacklisted words with astrik', () => {
    expect(sensetiveWords('This is a test', ['a'])).toBe('This is *** test')
})

test('it should replace multiple occurences of blacklisted words with astrik', () => {
    expect(sensetiveWords('This is a test. This is a test', ['a'])).toBe('This is *** test. This is *** test')
})
