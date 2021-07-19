import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'
import BigList from './bigList'
const url = 'https://swapi.dev/api/starships/'

// memo - запоминаем пропсы компонента, если нету изменений в пропсах, компонент не ререндерится
// useCallback - возвращает одну и ту же функцию пока аргументы не изменились (используется для постоянства ссылок)
// useMemo - возвращает один и тот же результат вычисления функции, пока аргументы не изменились (тяжелые вычисления)

const calculateMostLong = (data) => {
  return data.reduce((total, item) => {
    const length = item.length
    console.log('hello')
    if (length >= total) {
      total = length
    }
    return total
  }, 0)
}

const Index = () => {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)
  const { products } = useFetch(url)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  const mostLong = useMemo(() => calculateMostLong(products), [products])

  useEffect(() => {
    console.log('rerender')
  })

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>cart: {cart}</h1>
      <h2>Most long ship: {mostLong}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+ 1</button>

      <BigList products={products} addToCart={addToCart} />
    </div>
  )
}

export default Index
