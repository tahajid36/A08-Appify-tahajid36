import React from 'react';
import errorImg from '/src/assets/error-404.png'
import { Link, useLocation, useRouteError } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Error = () => {
    const link = <><Link to={'/'}>Go Back</Link></>

    const error = useRouteError()
    console.log(error)
    return (
        
       <div>
        <div className='container mx-auto'>
        <Navbar></Navbar>
         <div className='flex my-[60px] flex-col space-y-6 justify-center items-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-7xl font-bold'>{error?.message}</h1>
            <p>The page you are looking for is not available.</p>
            <button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>{link}</button>
        </div>
        
       </div>
       <Footer></Footer>
       </div>
       
    );
};

export default Error;