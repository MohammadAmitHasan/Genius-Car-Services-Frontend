import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../config.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [agreeTerms, setAgreeTerms] = useState(false);

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        console.log(user)
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        console.log('Updated Profile');
        navigate('/');
    }

    return (
        <div className='my-3'>
            <h1 className='text-primary text-center'>Please Register</h1>
            <div className='col col-12 col-md-8 col-lg-6 mx-auto p-3 border border-2 rounded-3'>
                <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        {/* Clicking on the checkbox alter the state */}
                        <input onClick={() => setAgreeTerms(!agreeTerms)} type="checkbox" name="terms" id="terms" />
                        <label className={`ms-2 ${agreeTerms ? 'text-success' : 'text-danger'}`} htmlFor="terms">Agree the terms and conditions of Genius Car Services</label>
                    </Form.Group>

                    {/* The Button will be disabled when the agreeTerms is false */}
                    <Button disabled={!agreeTerms} variant="primary" type="submit">
                        Sign Up
                    </Button>

                </Form>
                <p className='mt-3'>Already have an account? <Link className='text-primary text-decoration-none' to={'/login'}>Login</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;