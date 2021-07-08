import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  // 1. fetch
  // const getUsers = async () => {
  //   const response = await fetch(url)
  //   const users = await response.json()
  //   setUsers(users)
  //   console.log(users)
  // }

  useEffect(() => {
    // getUsers()

    //2. axios
    axios.get(url).then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { login, avatar_url, id, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
