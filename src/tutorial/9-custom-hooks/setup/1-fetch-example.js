import React from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://swapi.dev/api/starships/'

const FetchExample = () => {
  const { loading, products } = useFetch(url)

  return (
    <div>
      {loading
        ? 'loading'
        : products.map((product, index) => {
            return <div key={index}>{product.name}</div>
          })}
    </div>
  )
}

export default FetchExample
