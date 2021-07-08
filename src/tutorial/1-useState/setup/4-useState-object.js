import React from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  console.log(person)

  // const [name, setName] = useState('peter')
  // const [age, setAge] = useState(24)
  // const [message, setMessage] = useState('random message')

  // плохой способ работать с объектами (раздуваем код объявлениями состояний)
  // spread operator - крутая фича

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello wrold' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
