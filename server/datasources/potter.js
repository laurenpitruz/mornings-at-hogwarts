const { RESTDataSource } = require('apollo-datasource-rest')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

class PotterAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.potterapi.com/v1'
  }
  async getHouses() {
    const response = await this.get(`/houses?key=${process.env.POTTER_API_KEY}`)
    return Array.isArray(response) ? response.map(house => this.houseReducer(house)) : []
  }
  async getCharacters() {
    const response = await this.get(`/characters?key=${process.env.POTTER_API_KEY}`)
    return Array.isArray(response) ? response.map(async (char) => this.characterReducer(char)) : []
  }
  async getCharacter({ id }) {
    const response = await this.get(`/characters/${id}?key=${process.env.POTTER_API_KEY}`)
    return this.characterReducer(response[0])
  }
  async getHouse({ id }) {
    const response = await this.get(`/houses/${id}?key=${process.env.POTTER_API_KEY}`)
    return this.houseReducer(response[0])
  }
  async getSpells() {
    const response = await this.get(`/spells?key=${process.env.POTTER_API_KEY}`)
    return Array.isArray(response) ? response.map(async (spell) => this.spellsReducer(spell)) : []
  }
  characterReducer(char) {
    return {
      id: char._id,
      name: char.name,
      role: char.role,
      house: char.house,
      school: char.school || 'unknown',
    }
  }
  houseReducer(house) {
    return {
      id: house._id,
      name: house.name,
      mascot: house.mascot,
      headOfHouse: house.headOfHouse,
      houseGhost: house.houseGhost,
      founder: house.founder,
      values: house.values,
      colors: house.colors
    }
  }
  spellsReducer(spell) {
    return {
      id: spell._id,
      spell: spell.spell,
      effect: spell.effect
    }
  }
}

module.exports = PotterAPI



