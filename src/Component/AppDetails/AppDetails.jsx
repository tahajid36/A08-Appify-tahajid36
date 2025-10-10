import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "/src/assets/icon-downloads.png";
import ratingsImg from "/src/assets/icon-ratings.png";
import reviewImg from "/src/assets/icon-review.png";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { addToInstalledData, getStoredApp } from "../Utility/Utility";
import { ToastContainer, toast } from 'react-toastify';
import ErrorNotFound from "../Error/ErrorNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const AppData = useLoaderData();
  const AppID = parseInt(id);
  const SingleData = AppData.find((App) => App.id === AppID);
  const chartData = SingleData?.ratings;
  const [buttonState, setButtonState] = useState(false)
  useEffect(()=>{
    const installedApp = getStoredApp()
    const alreadyInstalled = installedApp.some(a=>a==AppID)
    if(alreadyInstalled){ setButtonState(true)
    }
  },[])

  const BarChartData = (

    <ResponsiveContainer width='100%' height='100%'>
    <BarChart
    
      data={chartData}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" reversed />
      <Tooltip />
      <Bar dataKey="count" fill="#FF8811" barSize={25} />
    </BarChart>
    </ResponsiveContainer> 

  )
  

  const {
    image,
    companyName,
    title,
    description,
    downloads,
    reviews,
    ratingAvg,
    size,
  } = SingleData ||{}

 const  notify = () => {toast('Application Installed Succesfully')}

 const handleInstall = (id) => {
  const installedApp = getStoredApp()
  const alreadyInstalled = installedApp.some(a=>a.id!==SingleData.id)
    addToInstalledData(id),
    setButtonState(alreadyInstalled)
    
    
  };
  if(!SingleData){
    return <ErrorNotFound></ErrorNotFound>
  }
  return (
    <div className="mt-[80px] container mx-auto mb-[100px]">
      <div className="flex flex-col md:flex-row items-center">
        <img className="h-[300px] p-6" src={image} alt="" />
        <div className="">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>
              Developed By{" "}
              <span className="font-bold text-purple-500">{companyName}</span>
            </p>
          </div>
          <div className="divider divider-end"></div>
          {/* < hr className="text-gray-400"/> */}
          <div className="flex mt-[30px] gap-17">
            <div>
              <img src={downloadImg} alt="" />
              <p>Downloads</p>
              <h2 className="text-4xl font-bold">{downloads}M</h2>
            </div>
            <div>
              <img src={ratingsImg} alt="" />
              <p>Average Ratings</p>
              <h2 className="text-4xl font-bold">{ratingAvg}</h2>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h2 className="text-4xl font-bold">{reviews}K</h2>
            </div>
          </div>
          <button
          disabled={buttonState} 
            onClick={() => {handleInstall(SingleData.id),
              notify()
              
            }} 
            className="btn btn-wide mt-5 mb-5 text-white bg-[#00D390]"
          >
            {buttonState? 'Installed': `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl"> Ratings</h1>
        <div className="h-100">
        {BarChartData}
        {/* */}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Description</h1>
        <p>{description}</p>
      </div>
      <ToastContainer/>
    </div>
    
  );
};

export default AppDetails;

// image , title, rating, downloads, reviews, description
