import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject
} from '@apollo/client';

const cache = new InMemoryCache()

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  // 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial',
  cache,
  // headers: {
  //   appid: `process.env.${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  // }
})


client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));
