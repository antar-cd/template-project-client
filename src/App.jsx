
import './App.css'
import Contact from './Component/Contact/Contact'
import Feature from './Component/Feature/Feature'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'


import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import Statistic from './Component/Statistic/Statistic'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
          </div>
      <Products/>
      <Feature/>
      <Statistic/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
