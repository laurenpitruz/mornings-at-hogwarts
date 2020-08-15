const { gql } = require('apollo-server')

const typeDefs = gql`
  # weather schema
  type Weather {
    id: ID!
    zip: String!
    cityName: String!
    timezone: Int!
    longitude: Float!
    latitude: Float!
    currentWeather: CurrentWeather!
    sunrise: Int!
    sunset: Int!
  }
  type CurrentWeather {
    status: String!
    description: String!
    icon: String!
    temp: Float!
    feels_like: Float!
    tempHigh: Float!
    tempLow: Float!
    pressure: Int!
    humidity: Int!
    windSpeed: Float!
  }
  # stock schema
  type Stock {
    id: ID!
    symbol: String!
    industry: String!
    exchange: String!
    companyName: String!
    CEO: String!
    sector: String!
    employees: Int!
    description: String!
    currentQuote: Quote!
  }
  type Quote {
    latestPrice: Float!
    marketCap: Int!
    week52Low: Float!
    week52High: Float!
    peRatio: Float!
    latestUpdate: Int!
    latestVolume: Int!
  }
  # news schema
  type Article {
    author: String!
    title: String!
    description: String!
    content: String!
    date: String!
  }
  # queries
  type Query {
    weather(zip: String!): Weather
    stock(ticker: String!): Stock
    news: [Article]!
  }
`

module.exports = typeDefs
