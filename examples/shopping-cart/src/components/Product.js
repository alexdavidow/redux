import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, description }) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    <br/>{description}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Product
