import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='container my-5'>
            <h2>Name: {service.name}</h2>
            <button onClick={handleCheckout} className='btn btn-warning'>Checkout</button>
        </div>
    );
};

export default ServiceDetails;