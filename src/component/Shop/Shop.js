import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const[products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products?.map(product => <Product
                            key={product.id}
                            product = {product}
                            handleAddToCart = {handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;