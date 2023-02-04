
import "./fav.css"
import React from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import ProductCard from "../../component/ProductCard"
import { useSelector } from "react-redux"
import { favSelector } from "../../reducer/favItem"

function Fav() {


    let favProducts = useSelector(favSelector)
    

    return (
      <>
       <Header />
    <div className="container mt-3">
      {
        favProducts.length ===0 &&
        <h2 className="mt-3">No Product to show</h2>
      }
     
        <div className="row home-con">
          {favProducts.map((pro, i) => 
          <div className="col-md-3 mb-4" key={i}>
            <ProductCard item={pro} />
          </div>
           )}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Fav
