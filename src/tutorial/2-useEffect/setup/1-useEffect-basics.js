import React, { useState, useEffect } from 'react'

// По дефолту запускается при каждом ререндере
// функция очистки
// второй параметр позволяет (запустить один раз либо добавтить зависимость рендера)
// нельяз вызывать хуки по условию (закидываем условия внутрь хука)
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('effect!')
    if (value > 5) {
      document.title = `New Messages ${value}`
    }
  }, [value])

  console.log('render component')

  const handler = () => {
    setValue((prev) => prev + 1)
  }

  return (
    <div>
      <h4>{value}</h4>
      <button className='btn' onClick={handler}>
        Click
      </button>
      <hr />
    </div>
  )
}

export default UseEffectBasics
