import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, img, price } = service;
    const navigate = useNavigate();

    const getDetails = id => {
        navigate('/service/' + id);
    }

    return (
        <div className='service-container shadow'>
            <img src={img} alt="" />
            <div className='p-2'>
                <h3>{name}</h3>
                <h5>Charge: <span className='text-success'>${price}</span></h5>
                <p>{description}</p>
                <button onClick={() => getDetails(_id)} className='btn btn-primary'>Book {name}</button>
            </div>
        </div>
    );
};

export default Service;