const User = require('./db/user')
module.exports = {
  Query: {
    weather: (_, { zip }, { dataSources }) =>
    dataSources.weatherAPI.getWeather({ zip }),
    // stocks: (_, { tickers }, { dataSources }) =>
    // dataSources.stockAPI.getAllStocks({ tickers }),
    stock: (_, { ticker }, { dataSources }) =>
    dataSources.stockAPI.getStock({ ticker }),
    news: (_,__, { dataSources }) =>
    dataSources.newsAPI.getNews(),
    characters: (_,__, {dataSources }) => dataSources.potterAPI.getCharacters(),
    houses: (_,__, { dataSources }) => dataSources.potterAPI.getHouses(),
    house: (_,{ id },{ dataSources }) => dataSources.potterAPI.getHouse({id}),
    spells: (_,__, {dataSources}) => dataSources.potterAPI.getSpells(),
    users: () => User.findAll(),
    user: ({id}) => User.findOne({where: {id}}),
  }
}
