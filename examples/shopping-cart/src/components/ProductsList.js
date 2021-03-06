import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children, description }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
    <div>{description}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
