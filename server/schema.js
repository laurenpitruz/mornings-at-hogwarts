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
    latestPrice: String!
    marketCap: String!
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
  # house schema
  type House {
    id: ID!,
    name: String!,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    members: [String],
    values: [String],
    colors: [String]
  }
  # characters schema
  type Character {
    id: ID!,
    name: String!,
    role: String!,
    school: String!
    house: House
  }
  # queries
  type Query {
    weather(zip: String!): Weather
    stock(ticker: String!): Stock
    # stocks: [Stock]!
    news: [Article]!
    houses: [House]
    characters: [Character]
  }
`

module.exports = typeDefs
