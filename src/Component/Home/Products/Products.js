import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    //console.log(product);
    return (
        <div className='productsCard'>
            {/* <h2> total products {product.length}</h2> */}
            {
                product.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;