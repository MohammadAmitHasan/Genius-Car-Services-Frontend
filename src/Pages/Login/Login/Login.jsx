import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../config.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const refEmail = useRef('');
    const refPassword = useRef('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        signInWithEmailAndPassword(email, password);

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken)
            })
    }

    if (user) {
        navigate(from, { replace: true });
        // console.log(user);
    }

    let errorMessage = '';

    if (error || resetError) {
        errorMessage = <div>
            <p className='text-center text-light bg-danger p-2 rounded'>
                {error?.message} {resetError?.message}
            </p>
        </div>
    }

    const handleResetPassword = async (e) => {
        const email = refEmail.current.value;
        if (email) {
            toast('Password reset email sent');
            await sendPasswordResetEmail(email);
        }
        else {
            toast("PLease provide your email")
        }
    }

    return (
        <div className='my-5'>
            <h1 className='text-primary text-center'>Please Login</h1>
            {errorMessage}
            <div className='col col-12 col-md-8 col-lg-6 mx-auto p-3 border border-2 rounded-3'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={refEmail} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={refPassword} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>

                <p className='mt-3'>Forgot Password? <button className='btn btn-link text-decoration-none p-0 mb-1'
                    onClick={handleResetPassword}>Reset</button></p>

                <p className='mt-3'>Don't have an account? <Link className='text-primary text-decoration-none' to={'/register'}>Sign Up</Link> </p>
            </div>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;