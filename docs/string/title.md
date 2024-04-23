# title
Formats the given string in title case fashion

| Parameter | Type | Required | Description |
| -------- | ---- | -------- | ----------- |
| str | `string` | Yes | The string to format |
| Returns | `string` | Yes | The formatted string |

```ts
import { title } from 'dashx'
console.log(title('hello world')) // Hello World
console.log(title(undefined)) // ""
```
