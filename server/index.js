const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const WeatherAPI = require('./datasources/weather')
const StocksAPI = require('./datasources/stocks')
const ArticleAPI = require('./datasources/news')
const PotterCharsAPI = require('./datasources/potterChar')
const PotterHouseAPI = require('./datasources/potterHouse')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherAPI: new WeatherAPI (),
    stockAPI: new StocksAPI(),
    newsAPI: new ArticleAPI(),
    potterCharsAPI: new PotterCharsAPI(),
    potterHouseAPI: new PotterHouseAPI()
  }),
  engine: {
    reportSchema: true,
    variant: "current"
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
