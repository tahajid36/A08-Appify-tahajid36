import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../AppsSection/App";

const AllApps = () => {
  const AppsData = useLoaderData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const SearchedApps = term
    ? AppsData.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : AppsData;
    

  return (
    <div className="space-y-6 mt-[100px] container mx-auto">
      <h1 className="text-center text-3xl md:text-6xl font-bold">Our All Applications</h1>
      <p className="text-center text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between">
        <h4 className="font-bold text-xl md:text-3xl">({SearchedApps.length}) Apps Found</h4>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {SearchedApps.map((app) => (
          <App app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
