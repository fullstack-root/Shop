import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/Store/HomeScreen";
import ProductScreen from "./components/screens/Store/ProductScreen";
import ProductEditScreen from "./components/screens/Store/ProductEditScreen";
import OrderListScreen from "./components/screens/Store/OrderListScreen";
import CartScreen from "./components/screens/Store/CartScreen";
import LoginScreen from "./components/screens/Admin/LoginScreen";
import RegisterScreen from "./components/screens/Admin/RegisterScreen";
import ProfileScreen from "./components/screens/Admin/ProfileScreen";
import ShippingScreen from "./components/screens/Store/ShippingScreen";
import PaymentScreen from "./components/screens/Store/PaymentScreen";
import PlaceOrderScreen from "./components/screens/Store/PlaceOrderScreen";
import OrderScreen from "./components/screens/Store/OrderScreen";
import UserListScreen from "./components/screens/Admin/UserListScreen";
import ProductListScreen from "./components/screens/Store/ProductListScreen";
import RenterScreen from "./components/screens/Apartment/RenterScreen";
import UserEditScreen from "./components/screens/Admin/UserEditScreen";
import RenterEditScreen from "./components/screens/Apartment/RenterEditScreen";



const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/admin/userslist" element={<UserListScreen />} />
            <Route path="/admin/user/" element={<UserEditScreen />}>
              <Route path=":id" element={<UserEditScreen />} />
            </Route>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/admin/productlist' element={<ProductListScreen />} />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route path="/product/" element={<ProductScreen />}>
              <Route path=":id" element={<ProductScreen />} />
            </Route>
            <Route path="/admin/product/" element={<ProductEditScreen />}>
              <Route path=":id" element={<ProductEditScreen />} />
            </Route>
            <Route path="/order/" element={<OrderScreen />}>
              <Route path=":id" element={<OrderScreen />} />
            </Route>
            <Route path="/cart/" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>

            <Route path="/admin/apartment/renter/" element={<RenterEditScreen />}>
            <Route path=":id" element={<RenterEditScreen />} />
            </Route>  

            <Route path="/admin/apartment" element={<RenterScreen/>} />    

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
