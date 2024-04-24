# flat

**Given an array of arrays,return a new array with all sub-array elements concatenated into it.**

## basic usage

Given an array that contains many arrays, return a new array where all items from the children are present at the top level.

| Parameter |type | Description |
| --- | --- | --- |
| arr | `array` | |
| func | `function \| Rexgex` |  |
| desc | `boolean` |  |

```typescript
import { flat } from 'func-dash'
console.log(flat([1, 2, 3, 4, 5]), item => item, true) // [5, 4, 3, 2, 1]
console.log(flat([{ a: 3 }, { a: 2 }, { a: 1 }]), item => item.a, false) //[{ a: 1 }, { a: 2 }, { a: 3 }]
```
