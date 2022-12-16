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

## Development
### Server (./src/index.ts)
We can start the server by running the following command:
```bash
yarn dev
```

### Models (./src/models)
We can create a model by creating a new file in the models folder (product.ts  is an example).

## Production
We can build the project by running the following command, the build will be in the **dist** folder:
```bash
yarn build
```

We can start the server in production mode by running the following command:
```bash
yarn start
```
