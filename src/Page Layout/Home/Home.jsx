import React, { useEffect, useState } from 'react';
import Hero from '../../Component/Hero/Hero';
import Products from '../../Component/ProductCard/ProductCard';
import Feature from '../../Component/Feature/Feature';
import Statistic from '../../Component/Statistic/Statistic';
import Contact from '../../Component/Contact/Contact';
import ProductCard from '../../Component/ProductCard/ProductCard';
import Ctegories from '../../Component/Categories/Ctegories';


const Home = () => {
    const [products,setProducts] = useState([])

    useEffect(() =>{
        const fetchProducts = async() =>{
            const res =await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await res.json()
          
            setProducts(data)
        }

        fetchProducts()
    },[])

    return (
        <>
        <Hero/>
          <Ctegories/>
            <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
          </div>
          {
            products.length > 0 ?
            <ProductCard products={products}/> :
            <div>loading...</div>
          }
          <ProductCard/>
          <Statistic/>
          <Contact/>

        </>
    );
};

export default Home;