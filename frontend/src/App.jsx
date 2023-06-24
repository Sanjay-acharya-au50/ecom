
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Navbar from './components/navbar/Navbar'
// import Announcement from './components/announcement/Announcement'
// import Product from './components/productList/Product'
// import Slider from './components/sliders/Slider'
// import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import ProductP from './pages/productPage/ProductP'
import Login from './pages/loginPage/Login'
import Register from './pages/registerPage/Register'
import Cart from './components/carts/Cart'
import {CartProvider} from './context/cart_context'


function App() {
  return (
    <>

    <CartProvider>


  <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductP/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

    </Routes>
</Router>

</CartProvider>


    </>

  )
}

export default App
