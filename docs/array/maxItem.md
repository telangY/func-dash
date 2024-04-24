# maxItem

**Get max value from an array**

## basic usage

Given an array of items and a function to get the value of each item, returns the item with the largest value.

| Parameter |type | Description |
| --- | --- | --- |
| arr | `array` | |

```typescript
import { maxItem } from 'func-dash'
console.log(maxItem(maxItem([1, 2, 3, 4, 5])) // 5
console.log(maxItem([{ a: 1 }, { a: 2 }, { a: 3 }])) // { a: 3 }
```
