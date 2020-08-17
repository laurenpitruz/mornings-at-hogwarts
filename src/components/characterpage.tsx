import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Form, InputGroup, Input, Button } from 'reactstrap'

import Character from './character'

export default function CharacterPage () {
  const [name, setName] = useState('Harry Potter')
  const [next, setNext] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNext(e.currentTarget.value)
  }

  const resetName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(next)
    setNext('')
  }

  return (
    <div className="character-container">
      <Form onSubmit={resetName}>
        <InputGroup size="sm">
          <Input value={next} onChange={handleNameChange}/>
          <Button inline className="btn" type="submit">New Character</Button>
        </InputGroup>
      </Form>
      <Character name={name} />
    </div>
  )
}
