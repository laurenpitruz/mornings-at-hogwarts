import React from 'react'
import { gql, useQuery } from '@apollo/client';

import Loading from './loading'
import Error from './error'

interface Character {
  name: string;
  wand: string;
  house: string;
  patronus: string;
}

interface CharacterData {
  character: Character;
}

interface Name {
  name: string;
}

const GET_CHARACTER = gql`
  query getCharacter($name: String!) {
    character(name: $name) {
      name
      wand
      house
      patronus
    }
  }
`

export default function Character ({name}: Name) {

  const { data, loading, error } = useQuery<CharacterData>(GET_CHARACTER, {
    variables: { name }
  })

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <h1>Not found</h1>
  return (
    <div className="character-container">
      <h1>{data.character.name}</h1>
      <p>Wand: {data.character.wand}</p>
      <p>House: {data.character.house}</p>
      <p>Patronus: {data.character.patronus}</p>
    </div>
  )
}
