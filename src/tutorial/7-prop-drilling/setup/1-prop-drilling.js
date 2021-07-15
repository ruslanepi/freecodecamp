import React, { useState } from 'react'
import { data } from '../../../data'
const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <>
      <div>PropDrilling</div>
      <List people={people} {...removePerson} />
    </>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} name={person.name} {...removePerson} />
      })}
    </>
  )
}

const Person = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}
export default PropDrilling
