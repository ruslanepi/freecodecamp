import React from 'react'

const ErrorExample = () => {
  let title = 'random title'

  const handler = () => {
    title = '123'
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handler}>
        button
      </button>
    </React.Fragment>
  )
}

export default ErrorExample

// значения не будет менялся так как нету инициатора ререндера, для перерисовки DOM
// для этого мы можем использовать хуки.
