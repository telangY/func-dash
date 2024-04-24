# ceil

Computes number rounded up to precision.

## basic usage

**arguments**
- `num: number`: number to round up
- `precision: number`: upward rounding accuracy

**returns**
- `number` rounded number

```typescript
import { ceil } from 'func-dash'
ceil(1.234, 2) // 1.24
ceil(1.234, 0) // 2
ceil(1.234, -1) // 1.234
```
