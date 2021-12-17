import React from 'react';

const Product = ({ product }) => {
    const { title, image, description, price } = product;
    return (
        <div>

            <img src={image} alt="" />
            <h4>{title}</h4>
            <h4> Price: {price}</h4>
            {/* <p>{description.slice(0, 180)}</p> */}
            <p>{description}</p>

        </div>
    );
};

export default Product;