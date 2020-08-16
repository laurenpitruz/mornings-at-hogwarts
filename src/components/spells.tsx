import React from 'react'
import { gql, useQuery } from '@apollo/client';

import Loading from './loading'
import Error from './error'

interface Spells {
  spell: string;
  effect: string;
}

interface SpellsData {
  spells: Spells[];
}

const GET_SPELLS = gql`
  query getSpells {
    spells {
      spell
      effect
    }
  }
`

export default function Spells () {
  const { data, loading, error } = useQuery<SpellsData>(GET_SPELLS)

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <h1>Not found</h1>

  return (
    <div className="spells-container">
      {data.spells.map((spell, index: number) => (
        <div key={index} className="spell-div">
          <h3>{spell.spell}</h3>
          <p>{spell.effect}</p>
        </div>
      ))}
    </div>
  )
}
