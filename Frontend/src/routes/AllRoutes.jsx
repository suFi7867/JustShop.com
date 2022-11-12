import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../pages/Akanksha/AdminProducts";

import LandingPage from "../pages/Akanksha/LandingPage";
import AllUsers from "../pages/Akash/AllUsers";
import Cart from "../pages/Akash/Cart";
import Electronic from "../pages/Ankit/Electronic";
import MenProducts from "../pages/Ankit/MenProducts";
import WomenProducts from "../pages/Ankit/WomenProducts";
import Login from "../pages/Shubham/Login";
import Register from "../pages/Shubham/Register";
import AdminDashboard from "../pages/Sufiyan/AdminDashboard";
import Dashboard from "../pages/Sufiyan/Dashboard";

import Orders from "../pages/Sufiyan/pages/Orders";

import PaymentForm from "../pages/Akanksha/PaymentForm";
import OrderSuccessfull from "../pages/Akanksha/OrderSuccessfull";
import SingleProduct from "../pages/Sufiyan/SingleProduct";

import Team from "../pages/Sufiyan/Team";
import AdminPrivateAuth from "./AdminPrivateAuth";
import PrivateRoute from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/men-clothing" element={<MenProducts />} />

        <Route path="/women-clothing" element={<WomenProducts />} />

        <Route path="/electronics" element={<Electronic />} />

        <Route
          path="/products/:type/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<Team />} />

        {/* NAVBAR IS DIFFERENT */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route path="/wishlist" element={<h1>WishList</h1>} />

        <Route
          path="/checkout/payment"
          element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/OrderSuccessfull"
          element={
            <PrivateRoute>
              <OrderSuccessfull />
            </PrivateRoute>
          }
        />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route
            index
            element={
              <AdminPrivateAuth>
                <Dashboard />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="dashboard"
            element={
              <AdminPrivateAuth>
                <Dashboard />{" "}
              </AdminPrivateAuth>
            }
          />

          <Route
            exact
            path="orders"
            element={
              <AdminPrivateAuth>
                <Orders />
              </AdminPrivateAuth>
            }
          />

          <Route
            exact
            path="products"
            element={
              <AdminPrivateAuth>
                <AdminProducts />{" "}
              </AdminPrivateAuth>
            }
          />

          <Route
            exact
            path="users/list"
            element={
              <AdminPrivateAuth>
                <AllUsers />{" "}
              </AdminPrivateAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
