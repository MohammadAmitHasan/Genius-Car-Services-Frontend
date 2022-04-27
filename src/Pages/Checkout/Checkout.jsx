import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../config.init'
import useServiceDetails from '../../CustomHooks/useServiceDetails';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams();

    // const [user, setUser] = useState({
    //     name: 'Muhammad Alauddin',
    //     email: 'alauddin@gmal.com',
    //     address: 'Dhanmondi 32',
    //     phone: '01521332222'
    // })

    // const changeAddress = event => {
    //     // Destructure user to get the address and rest data
    //     const { address, ...rest } = user;
    //     // Set new address and rest data in user state
    //     setUser({ address: event.target.value, ...rest })
    // }

    const { service } = useServiceDetails(serviceId);

    if (user) {
        // console.log(user)
    }


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // axios.post('https://mysterious-brook-87254.herokuapp.com/order', order)
        //     .then(response => {
        //         const { data } = response;
        //         if (data.insertedId) {
        //             toast('Your order is booked!!!');
        //             event.target.reset();
        //         }
        //     })


        fetch('https://mysterious-brook-87254.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }




    return (
        <div className='container my-5'>
            <h1>Please order: {service.name}</h1>
            <div style={{ width: '300px' }} className='mx-auto mt-4'>

                <form onSubmit={handlePlaceOrder}>
                    <input className='mb-2 w-100' type="text" name='name' disabled value={user?.displayName} readOnly />
                    <input className='mb-2 w-100' type="email" value={user?.email} disabled readOnly />
                    <textarea className='mb-2 w-100' name='address' placeholder='Address'></textarea>
                    <input className='mb-2 w-100' type="text" value={service?.name} disabled readOnly />
                    <input className='mb-2 w-100' type="text" name='phone' placeholder='phone' autoComplete='off' />
                    <input className='mb-2 w-100 btn btn-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;