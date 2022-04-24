import React from 'react';

const Footer = () => {

    return (
        <div className='bg-dark m-0 text-warning text-center p-5'>
            <p>Copyright &copy; {new Date().getFullYear()} By The Car Doctor</p>
        </div>
    );
};

export default Footer;