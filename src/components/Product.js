import React from 'react'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <>
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <ProductItem/>
      </section>
    </>
  )
}

export default Product
