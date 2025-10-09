import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import AppsSection from '../AppsSection/AppsSection';

const Home = () => {
    const data = useLoaderData()
    const Data = data.slice(0,8)
    return (
        <div >
           <Banner></Banner>
           <AppsSection Data={Data}></AppsSection>
        </div>
    );
};

export default Home;