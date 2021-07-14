import React, { useState, useEffect, useRef } from 'react'

//не триггерит ререндер, но умеет хранить ссылку на DOM элемент

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handler = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handler}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  )
}

export default UseRefBasics
