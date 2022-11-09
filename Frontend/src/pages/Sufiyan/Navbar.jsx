import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"20px", fontSize:"20px"}} >
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/men-clothing">Men Products</NavLink>
      <NavLink to="/women-clothing">Women Products</NavLink>
      <NavLink to="/electronics">Electronic</NavLink>
      <NavLink to="/SingleProduct">SingleProduct</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/checkout/payment">Payment</NavLink>
      <NavLink to="/OrderSuccessfull">OrderSuccessfull</NavLink>
    
    </div>
  )
}

export default Navbar
