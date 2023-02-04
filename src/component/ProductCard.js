import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { add, cartSelector, deleteTask } from '../reducer/cartReducer'
import { favAdd, favDelete, favSelector } from '../reducer/favItem'
import { addProductDetails } from '../reducer/productDetails'
import './Productcards.css'

function ProductCard(props) {
  let item = useSelector(cartSelector)
  let fevItem = useSelector(favSelector)
  let xyz = false
  let fev = true
  let product = props.item
  const dispatch = useDispatch()
// function check(){
  
// }
  // console.log(productStatus)
      item.map((pro)=>{
      if (pro.id === product.id){
        // setProductStatus(true)
        // console.log("I am in")
        xyz=true
      }
      return xyz
    })
    fevItem.map((pro)=>{
      if (pro.id === product.id){
        // setProductStatus(true)
        // console.log("I am in")
        fev=false
      }
      return xyz
    })
    // if(favItem.length>0){
    //   console.log("in the if")
    //   if(fevItem.id===product.id){
    //     console.log("in the if if")
    //   fev=false
    // }}
  function handelAddToCartEvent (){
    // old way totransfer data 
    // // console.log("Add To Cart")
    // // first check privius any data avaliable or not 
    // let cartItem = localStorage.getItem("cartItem")
    // if(!cartItem){
    //   cartItem = []
    // }else{
    //   cartItem=JSON.parse(cartItem)// it coivert string to json formate 
    // }
    // cartItem.push(product)
    // // send data to local sytorage 
    // localStorage.setItem("cartItem", JSON.stringify(cartItem))
    // props.inputForHome(product, cartItem.length)


    // now we use the redux 
    // using dispatch to send add actions and payload(data)

    if(!xyz){
      // console.log("inside the add")
      dispatch(add(product))}
    
  }
  function removeFromCart(){
    if(xyz){
      // console.log(item)
      dispatch(deleteTask(product))}
  }   
  function productDetailsFun(){

    dispatch(addProductDetails(product))
    console.log(product)
  }
  function addToFav(){
    // console.log("I am in add fav")
    dispatch(favAdd(product))
    // fev = false
    // console.log(fevItem)  

  }
  function removeToFav(){
    dispatch(favDelete(product))
    // fev = true
    //  console.log("I am in remoave fav")
    //  console.log(fevItem)

  }
  return (
    <div> 
      <div className="card card-main" >
      {fev === true ?<span ><NavLink onClick={addToFav}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill position-absolute top-0 end-0 heart-position" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></NavLink></span> :
<span ><NavLink onClick={removeToFav}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi favcolor bi-heart-fill position-absolute top-0 end-0 heart-position" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></NavLink></span>}
<div className='img-div'><NavLink className="dropdown-item" to="/proDis" onClick={productDetailsFun}><img src={product.image} className="card-img-top img-hight" alt="..."/></NavLink></div>
  <div className="card-body ">
    <p className="card-text pera-hight"><span className='fw-bold'>Brand,</span>{product.title}</p>
    <div className='star '>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      {product.rating.rate > 0.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
      {product.rating.rate > 1.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
      {product.rating.rate > 2.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
      {product.rating.rate > 3.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
      {product.rating.rate > 4.5 ? <span className="fa fa-star checked" ></span> : <span className="fa fa-star" ></span> }
      <span>({product.rating.count})</span>
    </div>
    <h3>${product.price}</h3>
    <div className="d-grid gap-2">
        { !xyz &&<button type="button" onClick={handelAddToCartEvent} className="btn btn-primary">Add To Cart</button>}
        { xyz &&<button type="button" onClick={removeFromCart} className="btn btn-primary">Rremove from cart</button>}
    </div>   
  </div>
</div>
    </div>
  )
}

export default ProductCard
