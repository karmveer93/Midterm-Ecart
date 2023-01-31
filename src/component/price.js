import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from '../reducer/cartReducer'
import "./price.css"

function Price(props) {

    let inPrice = 0
    let total = 0
    props.item.map(item =>{
        // console.log(inPrice)
        inPrice= item.price+inPrice
        // console.log(inPrice)
        
    })
    let subtotal = inPrice.toFixed(2)
     if(subtotal>1){total = (Number(subtotal) + 10).toFixed(2)}

  return (
      <div className="card price-cart " >
  <div className="card-body">
    <h2 className="card-title mb-5">Order Summary</h2>
    <div className='price-div mb-3'><h6 className="card-subtitle mb-3 text-muted">Subtotal</h6><h6 className="card-subtitle mb-3 text-muted">${subtotal}</h6></div>
    <div className='price-div mb-3'><h6 className="card-subtitle mb-3 text-muted">Shipping Estimate</h6><h6 className="card-subtitle mb-3 text-muted">$5</h6></div>
    <div className='price-div mb-3'><h6 className="card-subtitle mb-3 text-muted">Tax Estimate</h6><h6 className="card-subtitle mb-3 text-muted">$5</h6></div>
    <div className='price-div mb-3'><h4 className="card-subtitle mb-3 text-muted">Order Total</h4><h4 className="card-subtitle mb-3 text-muted">${total}</h4></div>
    </div>
</div>
  )
}

export default Price