import React from 'react';
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import BannerImg from '/src/assets/hero.png'
import { Link } from 'react-router';
const Banner = () => {

    const links = <>
     <Link to={'https://play.google.com/store/'}><button className='btn'> <IoLogoGooglePlaystore /> Google Play</button></Link>
    <Link to={'https://www.apple.com/app-store/'}><button className='btn'> <FaAppStoreIos /> App Store</button></Link>
   
    </>
    return (
        <div className='mt-20 '>
            <div className='text-center space-y-5'>
                <h1 className='text-7xl font-bold'>We Build <br />
                <span className='text-[#9F62F2]'>Productive</span>-Apps</h1>
                <p className='text-gray-500'>At-HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-6 justify-center my-6'>
                {links}
            </div>
            <img className='md:mx-auto  mt-8' src={BannerImg} alt="" />


            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-[80px]'>
                <h1 className='text-2xl md:text-6xl text-center mb-9 font-bold text-white'>Trusted By Millions, Built For You</h1>
                <div className='flex flex-col gap-3 md:flex-row justify-around items-center'>
                    <div className='text-center'>
                        <p className='text-white'>Total Downloads</p>
                        <h2 className='text-2xl md:text-6xl font-bold text-white'>29.6M</h2>
                        <p className='text-white'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-white'>Total Reviews</p>
                        <h2 className='text-2xl md:text-6xl font-bold text-white'>906K</h2>
                        <p className='text-white'>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-white'>Active Apps</p>
                        <h2 className='text-2xl md:text-6xl font-bold text-white'>132+</h2>
                        <p className='text-white'>31 more will Launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;