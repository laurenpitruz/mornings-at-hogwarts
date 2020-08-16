const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const WeatherAPI = require('./datasources/weather')
const StocksAPI = require('./datasources/stocks')
const ArticleAPI = require('./datasources/news')
const PotterAPI = require('./datasources/potter')

const db = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherAPI: new WeatherAPI (),
    stockAPI: new StocksAPI(),
    newsAPI: new ArticleAPI(),
    potterAPI: new PotterAPI()
  }),
  engine: {
    reportSchema: true,
    variant: "current"
  }
})

db.sync()

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
