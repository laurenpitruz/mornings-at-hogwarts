module.exports = {
  Query: {
    weather: (_, { zip }, { dataSources }) =>
    dataSources.weatherAPI.getWeather({ zip }),
    // stocks: (_, { tickers }, { dataSources }) =>
    // dataSources.stockAPI.getAllStocks({ tickers }),
    stock: (_, { ticker }, { dataSources }) =>
    dataSources.stockAPI.getStock({ ticker }),
    news: (_,__, { dataSources }) =>
    dataSources.newsAPI.getNews()
  }
}
