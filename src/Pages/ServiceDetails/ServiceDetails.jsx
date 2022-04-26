import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServiceDetails from '../../CustomHooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const { service } = useServiceDetails(serviceId);


    const navigate = useNavigate();
    const handleCheckout = (serviceId) => {
        navigate(`/checkout/${serviceId}`);
    }
    return (
        <div className='container my-5'>
            <h2>Name: {service.name}</h2>
            <button onClick={() => handleCheckout(serviceId)} className='btn btn-warning'>Checkout</button>
        </div>
    );
};

export default ServiceDetails;