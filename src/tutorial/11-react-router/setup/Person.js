import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'

const Person = () => {
  const { id } = useParams()
  const [name, setName] = useState('default name')

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setName(newPerson.name)
  }, [])

  return (
    <h2>
      {name}
      <Link to='/people' className='btn'>
        Back to people
      </Link>
    </h2>
  )
}

export default Person
