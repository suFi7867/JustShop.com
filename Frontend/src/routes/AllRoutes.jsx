import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProducts from '../pages/Akanksha/AdminProducts'

import LandingPage from '../pages/Akanksha/LandingPage'
import AllUsers from '../pages/Akash/AllUsers'
import Cart from '../pages/Akash/Cart'
import Electronic from '../pages/Ankit/Electronic'
import MenProducts from '../pages/Ankit/MenProducts'
import WomenProducts from '../pages/Ankit/WomenProducts'
import Login from '../pages/Shubham/Login'
import Register from '../pages/Shubham/Register'
import AdminDashboard from '../pages/Sufiyan/AdminDashboard'
import Dashboard from '../pages/Sufiyan/Dashboard'

import Orders from '../pages/Sufiyan/pages/Orders'
// import Payment from '../pages/Sufiyan/Payment'
// import PurchaseSucessfull from '../pages/Sufiyan/PurchaseSucessfull'
import PaymentForm from "../pages/Akanksha/PaymentForm";
import OrderSuccessfull from "../pages/Akanksha/OrderSuccessfull";
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
            element={   <PaymentForm /> } />

            <Route path='/OrderSuccessfull' 
            element={<OrderSuccessfull /> }  />



      
          <Route path='/admin' element={<AdminDashboard/>} >

            <Route   index element={< Dashboard/>} />
            <Route  exact path="dashboard" element={<Dashboard/>} />
            <Route  exact path="orders" element={< Orders/>} />
            <Route  exact path="products" element={<AdminProducts/>} />
            <Route  exact path="users/list" element={<AllUsers/>} />
          </Route>
         
        </Routes>
      
    </div>
  )
}

export default AllRoutes
