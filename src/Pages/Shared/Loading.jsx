import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='mx-auto p-5 text-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;