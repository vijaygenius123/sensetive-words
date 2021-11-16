export const sensitiveWords =  (content, words) => {
    return content.replace(
        new RegExp(words.join('|'), 'ig'),
        '***'
        )
}
