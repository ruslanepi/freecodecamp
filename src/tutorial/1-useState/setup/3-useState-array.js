import React from 'react'
import { data } from '../../../data'

// We can use React.useState and import {useState}
// когда работаем с данными не забывать делать
// setState работать во внутренних функциях с текущим состоянием, а не данными которые пришли их вне (инициализирующими)

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  // const removeItem = (id) => {
  //   setPeople((oldPeople) => {
  //     const newPeople = oldPeople.filter((person) => person.id !== id)
  //     return newPeople
  //   })
  // }

  const removeItem = (id) => {
    const newData = people.filter((person) => person.id !== id)
    console.log(newData)
    setPeople(newData)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h4>{id}: </h4>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
