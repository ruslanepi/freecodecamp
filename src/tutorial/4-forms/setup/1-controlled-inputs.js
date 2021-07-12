import React, { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email }
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
      console.log(person)
    } else {
      console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
