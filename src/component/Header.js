 import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cartSelector } from '../reducer/cartReducer'
 import './Header.css'
 
 function Header() {
// old methode
  // const [page, setPage] = useState("")
  // useEffect(()=> {
  //   let  item =  localStorage.getItem("cartItem")
  //   if(item){
  //     item = JSON.parse(item)
  //     setCartItemCount(item.length)
  //   }
  // }, [props])
  // // console.log(cartItemCount)
  // function pageChange(t){
  //   props.notify(t)
  //   console.log("massage send")
  //   console.log(t)
  //   console.log(t.target.value)
  // }
 
// redux use
const cartItemCount =useSelector(cartSelector).length  


   return (
    <div className='main-Header-margi'>
       <div className='header-main'>
         <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="red">
           <div className="container-fluid">
             <NavLink className="navbar-brand icon-container" to="/">
               <h1 className='h1-blue'>SHOP</h1><h1 className='h1-black'>LANE</h1>
             </NavLink>
             <div className="collapse navbar-collapse header-left " id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-6 mb-lg-5 flex-item">
                 <li className="nav-item dropdown ">
                   <button className="btn btn-light dropdown-toggle dropdown-button  " data-bs-toggle="dropdown" aria-expanded="false"><div className='dropDowanMenuDiv'><span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                       <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                       <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                     </svg></span> <span>Log In <br></br> or &nbsp;Sing Up</span></div>
                   </button>
                   <ul className="dropdown-menu dropdown-menu-wight">               
                     <li><NavLink className="dropdown-item mb-2" to="/login">Log In</NavLink></li>
                     <li><NavLink className="dropdown-item" to="/register">Sing Up</NavLink></li>
                     <li><NavLink className="dropdown-item" to="/fav">Favourite</NavLink></li>
                   </ul>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link active" aria-current="page" to="/cart">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                       <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                       <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                     </svg>&nbsp;
                     {
                       cartItemCount > 0 &&
                       <span className="badge text-bg-primary">{cartItemCount}</span>
                     }
                   </NavLink>
                 </li>
               </ul>

             </div>
           </div>
         </nav>
       </div>
       <div className='navbar navbar-expand-lg bg-body-tertiary border-top border-bottom '>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-item second-Header" >
          <li className="nav-item" ><NavLink className="nav-link active" aria-current="page" to="/" >All</NavLink></li>
          <li className="nav-item" ><NavLink className="nav-link active" aria-current="page" to="/electronic">Electronics</NavLink></li>
          <li className="nav-item" ><NavLink className="nav-link active" aria-current="page" to="/jewelery">Jewelery</NavLink></li>
          <li className="nav-item" ><NavLink className="nav-link active" aria-current="page" to="/men">Men's Clothing</NavLink></li>
          <li className="nav-item" ><NavLink className="nav-link active" aria-current="page" to="/women" >Women's Clothing</NavLink></li>
        </ul>
       </div>
     </div>
   )
 }
 
 export default Header
 






// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid main-div">
//       <div>
//       <a className="navbar-brand main_a" href="#"><h1 className='h1-blue'>SHOP</h1><h1 className='h1-black'>LANE</h1></a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       </div>
//       <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><div className='dropDowanMenuDiv'><span>
//             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
//             </svg></span> <span>Log In <br></br> or &nbsp;Sing Up</span></div>
//             </button>
//             <ul className="dropdown-menu dropdown-menu-dark">
//               <li><a className="dropdown-item" href="#">Log In</a></li>
//               <li><a className="dropdown-item" href="#">Sing Up</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav> 