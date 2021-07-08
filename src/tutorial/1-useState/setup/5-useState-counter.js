import React from 'react'

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1)
    }, 2000)
  }

  // Для асинхронных события необходимо преобразовывать СТАРОЕ значение
  // иначе не будет происходить обновление стейта

  return (
    <>
      <section style={{ margin: '4em 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue((prev) => prev + 1)}>
          increase
        </button>
        <button className='btn' onClick={() => setValue((prev) => prev - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          reset
        </button>
      </section>

      <section style={{ margin: '4em 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
