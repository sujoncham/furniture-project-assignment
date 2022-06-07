import React from 'react';
import './Product.css';

const Item = ({review}) => {
    const {name, img, para, rating} = review;
    
    return (
        <div className='col-md-4 p-2'>
            <div className='d-flex justify-content-between align-items-center rounded border border-warning m-2 p-1 h-100'>
                <img className='w-25 rounded-circle border border-danger p-1' src={img} alt="" />
                <div className='item-text p-2'>
                    <h4>{name}</h4>
                    <p>{para}</p>
                    <p>Rating: <span className='rate'>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Item;