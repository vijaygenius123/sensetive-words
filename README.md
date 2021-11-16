# Example

```shell
npm install sensitive-words
```
```javascript
const {sensitiveWords} = require('sensitive-words')
// ES2015
import {sensitiveWords} from 'sensitive-words'


console.log(sensitiveWords('This is a test', ['a']))
// This is *** test
```

