# sumItem
**Add up all items of an array**

## basic usage

Given an array of items, and an optional function to map each item to a number, add up all the items.

| Parameter |type | Description |
| --- | --- | --- |
| arr | `array` | |
| func | `function` |  |

```typescript
import { sumItem } from 'func-dash'
console.log(sumItem([1, 2, 3, 4, 5])) // [15
console.log(sumItem([{ a: 1 }, { a: 2 }, { a: 3 }], item => item.a)) // 6
```
