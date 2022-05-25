import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
import SignUp from "./Pages/Auth/SingUp";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/Shared/NotFound";
import PartsDetail from "./Pages/PartsDetail/PartsDetail";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import AddProducts from "./Pages/Dashboard/AddProducts";
import Users from "./Pages/Dashboard/Users";
import Payment from "./Pages/Dashboard/Payment";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/parts/:partId"
          element={
            <RequireAuth>
              <PartsDetail></PartsDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="addProducts" element={<AddProducts></AddProducts>}></Route>
        </Route>
        <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
