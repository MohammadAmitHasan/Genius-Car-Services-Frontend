import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../config.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://mysterious-brook-87254.herokuapp.com/orders?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        navigate('/login')
                    }
                }
                else {
                    res.json()
                        .then(data => setOrders(data))
                }
            })

        // const getOrders = async () => {
        //     const email = user.email;
        //     const url = `https://mysterious-brook-87254.herokuapp.com/order?email=${email}`;
        //     try {
        //         const { data } = await axiosPrivate.get(url);
        //         setOrders(data);
        //     }
        //     catch (error) {
        //         console.log(error.message);
        //         if (error.response.status === 401 || error.response.status === 403) {
        //             signOut(auth);
        //             navigate('/login')
        //         }
        //     }
        // }
        // getOrders();



    }, [user])


    return (
        <div className='container p-3'>
            <h1>My Orders</h1>
            <h4>{orders.length}</h4>
        </div>
    );
};

export default Orders;