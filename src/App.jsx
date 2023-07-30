
import './App.css'

import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Product from './Component/Product/Product'
import Home from './Page Layout/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Products from './Page Layout/Products/Products'
import CategoryProducts from './Page Layout/CategoryProducts/CategoryProducts'
import Cart from './Page Layout/Cart/Cart'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products/:id' element={<Product/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/categories/:name' element={<CategoryProducts/>}/>
       <Route path='cart' element= {<Cart/>}/>
       <Route path='*' element={<div className='h-[55vh] flex justify-center items-center text-4xl'>404</div>}/>
      </Routes>
     
      <Footer/>
    </>
  )
}

export default App
