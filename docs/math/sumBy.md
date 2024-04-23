# sumBy

Calculate the statistical value of a field based on raw data

## basic usage

**argument**
- `arr: T[]`: raw data
- `func: (item: T) => number`: calculate function

**return**
- `number`: statistical value

```ts
import { sumBy } from 'dashx'
const arr = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
const result = sumBy(arr, item => item.n)
console.log(result) // 20
```
