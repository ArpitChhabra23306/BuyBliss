import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  return (
    <div className='breadcrum'>
      <span>Home</span> <img src={arrow_icon} alt="arrow" />
      <span>Shop</span> <img src={arrow_icon} alt="arrow" />
      <span>{product.category}</span> <img src={arrow_icon} alt="arrow" />
      <span className="breadcrum-current">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
