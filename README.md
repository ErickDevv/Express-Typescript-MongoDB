# Express-Typescript-MongoDB

### A quick example of a nodejs server with express and mongoose.
---
---
### Configuration (./src/index.ts)
We can configure the server by setting the environment variables.
1. The database url.
2. The database name.
3. The port (optional), by default is 3000.

```typescript
const DB_URL = process.env.DB_URL || '';
const DB_NAME = process.env.DB_NAME || '';
const PORT = process.env.PORT || 3000;
```