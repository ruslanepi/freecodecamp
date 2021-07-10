import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('1')
  const [error, setError] = useState(false)
  const firstValue = text || '2'
  const secondValue = text && '3'

  return (
    <>
      {/* <h2>value1: {firstValue}</h2>
      <h2>value2: {secondValue}</h2> */}

      {/* <h1>{text || 'John doe'}</h1>
      <h2>{text && <h1>hello world</h1>}</h2> */}

      <div>{error ? <p>there is error</p> : <p>there is NO error</p>}</div>
      <button className='btn' onClick={() => setError((prev) => !prev)}>
        toggle error
      </button>
    </>
  )
}

export default ShortCircuit
