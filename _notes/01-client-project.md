
- https://www.apollographql.com/docs/react/get-started/

```
  
  npm install @apollo/client graphql
```


Modify App.tsx
```
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
	uri: "http://localhost:4000",
	cache: new InMemoryCache()
})
```