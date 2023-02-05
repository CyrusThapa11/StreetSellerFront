import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUser } from "./features/loggedInUser/loggedInUserSlice";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/general/Home";
import Auth from "./components/auth/Index";
import CreateProduct from "./pages/seller/CreateProduct";
import SingleProduct from "./pages/products/SingleProduct";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerProducts from "./pages/seller/SellerProducts";
import SellerOrders from "./pages/seller/SellerOrders";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllSellers from "./pages/admin/AllSellers";
import AllUsers from "./pages/admin/AllUsers";
import CreateCategories from "./components/admin/CreateCategories";
import AllOrders from "./pages/admin/AllOrders";
import MyWishList from "./pages/user/MyWishList";
import MyOrders from "./pages/user/MyOrders";
import UserDashboard from "./pages/user/UserDashboard";
import Error404 from "./pages/general/Error404";
import MyCart from "./pages/user/MyCart";
import AllProducts from "./pages/products/AllProducts";
import Navbar from "./components/utils/Navbar";
import { GetContext } from "./Context";
import AdminProtectedRoutes from "./components/utils/AdminProtectedRoutes";
import SellerProtectedRoutes from "./components/utils/SellerProtectedRoutes";
import UserProtectedRoutes from "./components/utils/UserProtectedRoutse";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  // console.log("colorMode", colorMode);
  // const dipatch = useDispatch();
  // const {
  //   loggedInUser,
  //   loggedInUser: { loadingStatus },
  // } = useSelector((state) => state);
  // console.log("loggedInUser", loggedInUser);
  // useEffect(() => {
  //   dipatch(fetchLoggedInUser());
  // }, [dipatch]);
  // console.log("loadingStatus", loadingStatus);

  const { AppState, setAppState } = GetContext();
  console.log("AppState --> ", AppState);

  return (
    // bgColor={`${colorMode === "light" ? "whitesmoke" : "#2F4858"}`}

    <Box bgColor={`${colorMode === "light" ? "whitesmoke" : "#2F4858"}`}>
      {/* <Button onClick={() => toggleColorMode()}>Click to change</Button> */}

      <Box>
        <Navbar />
        <Routes>
          {/* auth */}

          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          {/* products */}

          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          {/* admin */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin/dashboard/" element={<AdminDashboard />} />
            <Route path="/admin/all-sellers/" element={<AllSellers />} />
            <Route path="/admin/all-users/" element={<AllUsers />} />
            <Route path="/admin/all-orders/" element={<AllOrders />} />
            <Route
              path="/admin/create-categories/"
              element={<CreateCategories />}
            />
          </Route>

          {/* seller */}

          <Route element={<SellerProtectedRoutes />}>
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
            <Route path="/seller-orders/" element={<SellerOrders />} />
            <Route path="/seller-products/" element={<SellerProducts />} />

            {/* PRODUCTS CREATE */}

            <Route path="/products/create" element={<CreateProduct />} />
          </Route>

          {/* user */}
          <Route element={<UserProtectedRoutes />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/cart/" element={<MyCart />} />
            <Route path="/user/my-wishlist/" element={<MyWishList />} />
            <Route path="/user/my-orders/" element={<MyOrders />} />
          </Route>

          {/* cart */}

          {/* error */}

          <Route path="*" element={<Error404 />} />

          {/* end */}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
