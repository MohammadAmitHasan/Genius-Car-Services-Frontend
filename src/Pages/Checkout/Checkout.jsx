import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../config.init'

const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user)
    }
    return (
        <div>
            <h1>Please checkout your booking</h1>
        </div>
    );
};

export default Checkout;