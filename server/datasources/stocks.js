const { RESTDataSource } = require('apollo-datasource-rest')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

class StocksAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://sandbox.iexapis.com/stable/stock'
  }
  // async getAllStocks() {
  //   // const tickers = tickerObj.tickers
  //   const response = await this.get(`/market/batch?symbols=aapl,fb,tsla&types=quote,company&token=${process.env.IEX_API_KEY}`)
  //   Object.values(response).map(stock => this.stockReducer(stock))
  // }
  async getStock(tickerObj) {
    const ticker = tickerObj.ticker
    const response = await this.get(`/${ticker}/batch?types=quote,company&token=${process.env.IEX_API_KEY}`)
    return this.stockReducer(response)
  }
  stockReducer(stock) {
    return {
      id: stock.id || 0,
      symbol: stock.company.symbol,
      industry: stock.company.industry,
      exchange: stock.company.exchange,
      companyName: stock.company.companyName,
      CEO: stock.company.CEO,
      sector: stock.company.sector,
      employees: stock.company.employees,
      description: stock.company.description,
      currentQuote: {
        latestPrice: `$${stock.quote.latestPrice}`,
        marketCap: `$${(stock.quote.marketCap / 1000000000).toLocaleString()} billion`,
        week52High: stock.quote.week52High,
        week52Low: stock.quote.week52Low,
        peRatio: stock.quote.peRatio,
        latestUpdate: stock.quote.latestUpdate,
        latestVolume: stock.quote.latestVolume
      }
    }
  }
}



module.exports = StocksAPI
