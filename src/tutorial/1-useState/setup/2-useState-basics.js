import React, { useState } from 'react'

// use
// component name mus be uppercase
// must be in function/component body
// cannot call hook conditionally

const UseStateBasics = () => {
  const [state, setState] = useState('hahaha')

  const handler = () => {
    if (state === 'foo') {
      setState('bar')
    } else {
      setState('foo')
    }
  }

  return (
    <div>
      <p>{state}</p>

      <button onClick={handler}>click</button>
    </div>
  )
}

export default UseStateBasics
