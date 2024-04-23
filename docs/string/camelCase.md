# camelCase
Converts string to camel case.

## basic usage

**arguments**
- `str: string` - The string to convert.

**returns**
- `string` - The converted string.

```ts
import { camelCase } from 'dashx'
console.log(camelCase('foo-bar')) // fooBar
console.log(camelCase('__FOO_BAR__')) // fooBar
```
