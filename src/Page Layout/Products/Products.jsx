
import ProductCard from '../../Component/ProductCard/ProductCard';
import Ctegories from '../../Component/Categories/Ctegories';
import { useEffect, useState } from 'react';



const Products = () => {

    const [products,setProducts] = useState([])

    useEffect(() =>{
        const fetchProducts = async() =>{
            const res =await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
          
            setProducts(data)
        }

        fetchProducts()
    },[])

    return (
        <div>
           <Ctegories/>
           <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All PRODUCTS</h1>
          </div>
           {
            products.length > 0 ?
            <ProductCard products={products}/>
            :
            <div>Loading....</div>
           }
        </div>
    );
};

export default Products;