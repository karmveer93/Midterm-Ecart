
import "./productDetails.css"
import React from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import { useDispatch, useSelector } from "react-redux"
import { productSelector } from "../../reducer/productDetails"
import { add, cartSelector, deleteTask } from '../../reducer/cartReducer'

function ProductDis() {
    
    let products = useSelector(productSelector)[0]
    console.log(products)
    let item = useSelector(cartSelector)
  let xyz = false
  const dispatch = useDispatch()

      item.map((pro)=>{
      if (pro.id === products.id){
        xyz=true
      }
      return xyz
    })
  function handelAddToCartEvent (){


    if(!xyz){
      dispatch(add(products))}
    
  }
  function removeFromCart(){
    if(xyz){
      dispatch(deleteTask(products))}
  }
    return (
      <>
       <Header />
    <div className="containerMain">
      <div className="cart-Items ">
          <img src={products.image} alt={"#"} />
      </div>
      <div className="card-bodys ">
          <p className="card-text "><span className='fw-bold'>Brand,<br></br></span>{products.title}</p>
          <p className="card-text ">{products.description}</p>
            <div className='star '>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                  {products.rating.rate > 0.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
                  {products.rating.rate > 1.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
                  {products.rating.rate > 2.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
                  {products.rating.rate > 3.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
                  {products.rating.rate > 4.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
                  <span>({products.rating.count})</span>
            </div>
            <h3>${products.price}</h3>
          <div className="d-grid gap-2">
          { !xyz &&<button type="button" onClick={handelAddToCartEvent} className="btn btn-primary">Add To Cart</button>}
          { xyz &&<button type="button" onClick={removeFromCart} className="btn btn-primary">Rremove from cart</button>}
           </div>  
      </div>  
    </div>
    </>
  )
}

export default ProductDis
