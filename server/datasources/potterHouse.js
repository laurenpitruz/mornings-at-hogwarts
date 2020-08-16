const { RESTDataSource } = require('apollo-datasource-rest')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

class PotterHouseAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.potterapi.com/v1'
  }
  async getHouses() {
    const response = await this.get(`/houses?key=${process.env.POTTER_API_KEY}`)
    return Array.isArray(response) ? response.map(house => this.houseReducer(house)) : []
  }
  houseReducer(house) {
    return {
      id: house._id,
      name: house.name,
      mascot: house.role,
      headOfHouse: house.headOfHouse,
      houseGhost: house.houseGhost,
      founder: house.founder,
      members: house.members,
      values: house.values,
      colors: house.colors
    }
  }
}

module.exports = PotterHouseAPI



