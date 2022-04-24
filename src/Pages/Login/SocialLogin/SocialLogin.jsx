import React from 'react';
import google from '../../../image/SocialLogos/icons8-google-144.png'
import facebookLogo from '../../../image/SocialLogos/icons8-facebook-144.png'
import githubLogo from '../../../image/SocialLogos/icons8-github-144.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../config.init'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    let errorMessage = '';

    if (error || gitError) {
        errorMessage = <div>
            <p className='text-center text-light bg-danger p-2 rounded'>
                {error?.message} {gitError?.message}
            </p>
        </div>
    }

    if (user || gitUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mt-3 container'>
            <div className='d-flex '>
                <div style={{ height: '2px' }} className='bg-primary mt-2 w-100'></div>
                <p className='px-3'>
                    OR
                </p>
                <div style={{ height: '2px' }} className='bg-primary mt-2 w-100'></div>
            </div>

            {
                errorMessage
            }

            <div>
                <button onClick={() => signInWithGoogle()} className='my-2 btn btn-light border border-2 w-50 rounded-pill mx-auto d-block'>
                    <span><img height={40} className='me-2' src={google} alt="" /></span>
                    Google Login</button>

                <button className='my-2 btn btn-light border border-2 w-50 rounded-pill mx-auto d-block'>
                    <span><img className='me-2' height={40} src={facebookLogo} alt="" /></span>
                    Facebook Login</button>

                <button onClick={() => signInWithGithub()} className='my-2 btn btn-light border border-2 w-50 rounded-pill mx-auto d-block'>
                    <span><img className='me-2' height={40} src={githubLogo} alt="" /></span>
                    Github Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;