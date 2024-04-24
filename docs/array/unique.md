# unique

**Remove duplicates from an/a array/list**

## basic usage

Given an array of items — and optionally, a function to determine their identity — return a new array without any duplicates.

The function does not preserve the original order of items.

```typescript
import { unique } from 'func-dash'

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const arr2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 3 }]

console.log(unique(arr1)) // [1, 2, 3, 4, 5]
console.log(unique(arr2, item => item.a)) // [{ a: 1 }, { a: 2 }, { a: 3 }]
```
