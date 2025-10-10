import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../Utility/Utility";
import InstalledApp from "./InstalledApp";

const InstalledApps = () => {
  const InstalledAppData = useLoaderData();
  const [applist, setApplist] = useState([]);

  useEffect(() => {
    const storedAppData = getStoredApp();
    const appData = storedAppData;
    
    //just checked the array of ids we have the same ids matches the whole json data array objects anyof thems id
    const myAppInfo = InstalledAppData.filter((appinfo) =>
      appData.includes(appinfo.id)
    );
    setApplist(myAppInfo);
  }, []);

  return (
    <div>
      <div className="text-center space-y-4 mt-[80px]">
        <h1 className="text-6xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore ALL Trending Apps on the Market Developed by us.
        </p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">{applist.length} Apps Found</h2>
        <div>
          <select
            defaultValue="Server location"
            className="select select-neutral"
          >
            <option disabled={true}>Sort By Size</option>
            <option>High To Low</option>
            <option>Low To High</option>
            
          </select>
        </div>
      
      </div>
      <div className="mt-[60px]">
            {applist.map(info=> <InstalledApp info={info}></InstalledApp>)}
        </div>
    </div>
  );
};

export default InstalledApps;
