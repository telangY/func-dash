# replace

Replaces all occurrences of the search string with the replacement string.

| Parameter   | Type                  | Required | Description |
| ----------- | --------------------- | -------- | ----------- |
| str         | `string`              | Yes      |  The value to be replaced. |
| pattern     | `string \| RegExp `   | Yes      | The value to match. |
| replacement | `string \| Function ` | Yes      | The value to replace with. |
| Returns     | `string`              | Yes      | The string with the replaced values. |

```ts
import { replace } from 'dashx'
console.log(replace('Hello World', 'World', 'Dash')) // Hello Dash
```
