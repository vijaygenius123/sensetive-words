# Example

```shell
npm install @vijaygenius123/sensitive-words
```
```javascript
const {sensitiveWords} = require('@vijaygenius123/sensitive-words')
// ES2015
import {sensitiveWords} from '@vijaygenius123/sensitive-words'

const filteredWords = sensitiveWords(
    'This is a test',
    ['a'])

console.log(filteredWords)
// This is *** test
```
