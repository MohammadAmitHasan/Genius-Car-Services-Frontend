import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'
import Footer from './Pages/Shared/Footer'
import Header from './Pages/Shared/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
import Login from './Pages/Login/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import Register from './Pages/Login/Register/Register'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import Checkout from './Pages/Checkout/Checkout'
import AddService from './Pages/AddService/AddService'
import Manage from './Pages/Manage/Manage'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
