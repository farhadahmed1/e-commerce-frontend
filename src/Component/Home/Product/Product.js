import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Product = ({ product }) => {
    const { title, image, description, price } = product;
    return (


        <div className='productCard'>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <h4> Price: {price}</h4>
            {/* <p>{description.slice(0, 180)}</p> */}
            <p>{description}</p>

        </div>
    );
};

export default Product;