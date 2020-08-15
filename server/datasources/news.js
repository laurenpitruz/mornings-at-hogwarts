const { RESTDataSource } = require('apollo-datasource-rest')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

class ArticleAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://newsapi.org/v2/top-headlines'
  }
  async getNews() {
    const response = await this.get(`?country=us&apiKey=${process.env.NEWS_API_KEY}`)
    return Array.isArray(response.articles) ? response.articles.slice(0, 10).map(article => this.articleReducer(article)) : []
  }
  articleReducer(article) {
    return {
      id: article.id || 0,
      author: article.author || 'unknown',
      title: article.title,
      description: article.description || 'Not Available',
      content: article.content || 'Not Available',
      date: article.publishedAt
    }
  }
}



module.exports = ArticleAPI
