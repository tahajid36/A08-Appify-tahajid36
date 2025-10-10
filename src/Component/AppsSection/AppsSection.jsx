import React from "react";
import App from "./App";
import { Link } from "react-router";

const AppsSection = ({ Data }) => {
  
  const links = <>
  <Link to={'/allapps'}>
      <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Show All</button>
  </Link>
  </>
 
  return (
    <div>
      <div className="mt-6 space-y-4">
        <h1 className="text-6xl text-center font-bold">Trending Apps</h1>
        <p className="text-gray-500 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 mx-auto">
        {Data.map(app=> (<App app={app}></App>))}
      </div>
      <div className="flex justify-center mb-6">
      {links}
      </div>
    </div>
  
   
  );
};

export default AppsSection;
