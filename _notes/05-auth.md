
## Server side
Mutation/signup




## Client end
```
npm i apollo-link-context
```

set header
```
import { setContext } from "apollo-link-context";


const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")

	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})
```