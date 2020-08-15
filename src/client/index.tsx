import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject
} from '@apollo/client';

const cache = new InMemoryCache()

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache
})
