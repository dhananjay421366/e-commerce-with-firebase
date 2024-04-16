import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Admin from "./Pages/Admin/Admin";
import NoPage from "./Pages/Nopage/NoPage";
import MyState from "./Contxet/data/MyState";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Signup from "./Pages/Registration/Siginup/Signup";
import Login from "./Pages/Registration/Login/Login";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct/UpdateProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route
            path="/order"
            element={
              <ProtectedRouteUser>
                <Order />
              </ProtectedRouteUser>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteAdmin>
                <Admin />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<ProtectedRouteAdmin>
            <AddProduct />
          </ProtectedRouteAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRouteAdmin>
            <UpdateProduct />
          </ProtectedRouteAdmin>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// user

export const ProtectedRouteUser = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"login"} />;
  }
};

// admin

export const ProtectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "nimbalkardhananjay349@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
