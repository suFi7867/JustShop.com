import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPage from '../pages/Akanksha/LandingPage'
import Cart from '../pages/Akash/Cart'
import Electronic from '../pages/Ankit/Electronic'
import MenProducts from '../pages/Ankit/MenProducts'
import WomenProducts from '../pages/Ankit/WomenProducts'
import Login from '../pages/Shubham/Login'
import Register from '../pages/Shubham/Register'
import Payment from '../pages/Sufiyan/Payment'
import PurchaseSucessfull from '../pages/Sufiyan/PurchaseSucessfull'
import SingleProduct from '../pages/Sufiyan/SingleProduct'
import Team from '../pages/Sufiyan/Team'



const AllRoutes = () => {


  return (
    <div>

        <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/men-clothing' 
            element={  <MenProducts />} />

            <Route path='/women-clothing' 
            element={ <WomenProducts/> } />

            <Route path='/electronics' 
            element={ <Electronic/> } />


            <Route path='/products/:id' element={

             <SingleProduct />
            
            } />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register/>} />

            <Route path='/about' element={<Team/>} />
            


            {/* NAVBAR IS DIFFERENT */}
            <Route path='/cart' 
            element={  <Cart />  } />

            <Route path='/wishlist' 
            element={ <h1>WishList</h1> } />

            <Route path='/checkout/payment' 
            element={   <Payment /> } />

            <Route path='/OrderSuccessfull' 
            element={<PurchaseSucessfull /> }  />

        </Routes>
      
    </div>
  )
}

export default AllRoutes
