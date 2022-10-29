import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleAddToCart}) => {
    const {name,img,seller,price,ratings}= product || {};
    return (
        <div>
            <div className="product">
            <img src={img} alt="" />
            
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price ${price}</p>
                <p><small>Rating: {ratings} starts</small></p>
            </div>
            <button
                onClick={() => handleAddToCart(product)}
                className="btn-cart">
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Product;