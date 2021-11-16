const {sensitiveWords} = require('./')
test('it should replace blacklisted words with asterisk', () => {
    expect(sensitiveWords('This is a test', ['a'])).toBe('This is *** test')
})

test('it should replace multiple occurrences of blacklisted words with asterisk', () => {
    expect(sensitiveWords('This is a test. This is a test', ['a'])).toBe('This is *** test. This is *** test')
})
