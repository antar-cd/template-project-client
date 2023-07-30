import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';


const Ctegories = () => {
    const [categories,setCategories] = useState([])

    useEffect(() =>{
        const fetchCategories = async() =>{
            const res =await fetch('https://fakestoreapi.com/products/categories')
            const data = await res.json()
            console.log(data,'data')
            setCategories(data)
        }

        fetchCategories()
    },[])

    if(categories.length === 0) return <div>Loading....</div>

    return (
        <div>
            <Feature cards={categories} />
            
        </div>
    );
    
};

export default Ctegories;