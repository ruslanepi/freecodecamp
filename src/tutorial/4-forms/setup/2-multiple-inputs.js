import React, { useState } from 'react'

const ControlledInputs = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')

  const [person, setPerson] = useState({ name: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime.toString() }
      setPeople([...people, newPerson])
      setPerson({ name: '', email: '', age: '' })
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='Age'>Age: </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>

        <ul className='list'>
          {people.map((person) => {
            const { id, name, email } = person
            return (
              <li className='item' key={id}>
                <h4> Name: {name}</h4>
                <p>Email: {email}</p>
              </li>
            )
          })}
        </ul>
      </article>
    </>
  )
}

export default ControlledInputs
