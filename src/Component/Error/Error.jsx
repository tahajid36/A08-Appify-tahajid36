import React from 'react';
import errorImg from '/src/assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    const link = <><Link to={'/'}>Go Back</Link></>
    return (
        <div className='flex flex-col space-y-6 justify-center items-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-7xl font-bold'>Oops, page not found !</h1>
            <p>The page you are looking for is not available.</p>
            <button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>{link}</button>
        </div>
    );
};

export default Error;