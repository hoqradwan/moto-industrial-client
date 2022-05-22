import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/Auth/SingUp';
import Login from './Pages/Auth/Login';
import NotFound from './Pages/Shared/NotFound';
import PartsDetail from './Pages/PartsDetail/PartsDetail';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/parts/:partId' element={<PartsDetail></PartsDetail>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

   </div>
  );
}

export default App;
