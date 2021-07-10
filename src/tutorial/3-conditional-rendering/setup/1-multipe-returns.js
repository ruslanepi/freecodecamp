import React, { useState, useEffect } from 'react'
import axios from 'axios'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setIsLoading(true)
    // fetch(url)
    //   .then((resp) => {
    //     if (resp.status >= 200 && resp.status <= 299) {
    //       return resp.json()
    //     } else {
    //       setIsLoading(false)
    //       setIsError(true)
    //       throw new Error(resp.statusText)
    //     }
    //   })
    //   .then((user) => {
    //     setUser(user.login)
    //     setIsLoading(false)
    //   })
    //   .catch((error) => console.log(error))

    axios
      .get(url)
      .then((resp) => {
        setUser(resp.data.login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return <div>{user}</div>
}

export default MultipleReturns
