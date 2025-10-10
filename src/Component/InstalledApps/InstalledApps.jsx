import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeApp } from "../Utility/Utility";
import InstalledApp from "./InstalledApp";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const InstalledApps = () => {
  const InstalledAppData = useLoaderData();
  const [applist, setApplist] = useState([]);
  const [sortOrder, setSortList] = useState('none')
  

const handleRemove = (id) => {

    setApplist(prev => prev.filter(app => app.id !== id));
    removeApp(id)
    toast('App uninstalled Successfully')


}


const sortedItem = () => {
    if(sortOrder === 'downloads-asc'){
        return [...applist].sort((a,b)=> a.downloads - b.downloads)
    }
    else if(sortOrder === 'downloads-desc'){
        return [...applist].sort((a,b)=> b.downloads - a.downloads)
    }
    else{
        return applist
    }
}

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
    <div className="container mx-auto">
      <div className="text-center space-y-4 mt-[80px]">
        <h1 className="text-3xl md:text-6xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore ALL Trending Apps on the Market Developed by us.
        </p>
      </div>
      <div className="flex justify-between mt-[30px]">
        <h2 className="text-xl md:text-3xl font-bold">{applist.length} Apps Found</h2>
        <div>
          <select
          value={sortOrder}
          onChange={e=>setSortList(e.target.value)}
            defaultValue="Server location"
            className="select select-neutral"
          >
            
            <option  value='none'>Sort By Downloads</option>
            {/* disabled={true} */}
            <option value='downloads-desc'>High To Low</option>
            <option value='downloads-asc'>Low To High</option>
            
          </select>
        </div>
      
      </div>
      <div className="mt-[20px] md:mt-[60px]">
            {sortedItem().map(info=> <InstalledApp handleRemove={handleRemove} info={info}></InstalledApp>)}
        </div>
        <ToastContainer/>
    </div>
  );
};

export default InstalledApps;
