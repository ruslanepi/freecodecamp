import React from 'react'
import PropTypes from 'prop-types'
const Product = ({ name, passengers, starship_class }) => {
  return (
    <article className='product'>
      <h4>{passengers}</h4>
      <p> {name}</p>
      <div>{starship_class}</div>
    </article>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
}
Product.defaultProps = {
  name: 'default name',
  passengers: 'default passengers',
  starship_class: 'default class',
}

export default Product
