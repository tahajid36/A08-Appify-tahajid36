
import React from 'react';
import AppErrorImg from '/src/assets/App-Error.png'
import { Link } from 'react-router';

const ErrorNotFound = () => {
    
    return (
        
            <div>
        <div className='container mx-auto'>
        <Navbar></Navbar>
         <div className='flex my-[60px] flex-col space-y-6 justify-center items-center'>
            <img src={AppErrorImg} alt="" />
            <h1 className='text-7xl font-bold'>Oops, page not found !</h1>
            <p>The page you are looking for is not available.</p>
            <button  className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'><a href="/">Go Back</a></button>
        </div>
        
       </div>
       <Footer></Footer>
       </div>
       
      
    );
};

export default ErrorNotFound;