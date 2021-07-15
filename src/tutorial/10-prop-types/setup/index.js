import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

const url = 'https://swapi.dev/api/starships/'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <section>
      {products.map((item, index) => {
        return <Product key={index} {...item} />
      })}
    </section>
  )
}

export default Index
