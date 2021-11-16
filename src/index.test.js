import {sensitiveWords} from '.'

test('it should replace blacklisted words with astrik', () => {
    expect(sensitiveWords('This is a test', ['a'])).toBe('This is *** test')
})

test('it should replace multiple occurences of blacklisted words with astrik', () => {
    expect(sensitiveWords('This is a test. This is a test', ['a'])).toBe('This is *** test. This is *** test')
})
