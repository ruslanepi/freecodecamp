import React, { useEffect } from 'react'

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.count('rerender in BigList')
  })

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.url} className='item'>
            <div>{product.name}</div>
            <button onClick={addToCart}>add to cart</button>
          </div>
        )
      })}
    </div>
  )
})

export default BigList
