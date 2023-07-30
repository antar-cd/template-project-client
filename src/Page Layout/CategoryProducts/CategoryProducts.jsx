import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Component/ProductCard/ProductCard';

const CategoryProducts = () => {
    const { name } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };

        fetchProduct();
    }, []);

    if (product.length === 0) return <div>Loading....</div>;

    return (
        <ProductCard products={product} />
    );
};

export default CategoryProducts;
