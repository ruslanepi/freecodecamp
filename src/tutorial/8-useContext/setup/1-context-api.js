import React, { useState, useContext } from 'react'
import { data } from '../../../data'

const PersonContext = React.createContext()
//two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <div>ContextApi / useContext</div>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const { people } = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </>
  )
}

const Person = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
