const { RESTDataSource } = require('apollo-datasource-rest')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

class PotterCharsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.potterapi.com/v1'
  }
  async getCharacters() {
    const response = await this.get(`/characters?key=${process.env.POTTER_API_KEY}`)
    return Array.isArray(response) ? response.map(char => this.characterReducer(char)) : []
  }
  characterReducer(char) {
    return {
      id: char._id,
      name: char.name,
      role: char.role,
      school: char.school || 'unknown',
    }
  }
}

module.exports = PotterCharsAPI



