
   
import { ApolloServer } from 'apollo-server'
import { createContext } from './context'
import { schema } from './schema'

const server = new ApolloServer({
  schema,
  context: createContext,
})

server.listen(8964).then(({ url }) =>
  console.log(`Server ready at: ${url}`)
)