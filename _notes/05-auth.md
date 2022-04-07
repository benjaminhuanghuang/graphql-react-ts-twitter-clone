
## Server side
Mutation/signup




## Client end
```
npm i apollo-link-context
```

set header
```
import { setContext } from "apollo-link-context";
import { gql, useMutation } from "@apollo/client"


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

```
const SIGNUP_MUTATION = gql`
	mutation signup($name: String, $email: String!, $password: String!) {
		signup(name: $name, email: $email, password: $password) {
			token
		}
	}
`
```