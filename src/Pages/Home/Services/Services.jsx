import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useServices from '../../../CustomHooks/useServices';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    return (
        <div className='container my-5'>
            <h1 id='services' className='text-primary text-center'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;