import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "/src/assets/icon-downloads.png";
import ratingsImg from "/src/assets/icon-ratings.png";
import reviewImg from "/src/assets/icon-review.png";
import { LineChart, Line } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { addToInstalledData } from "../Utility/Utility";

const AppDetails = () => {
  const { id } = useParams();
  const AppData = useLoaderData();
  const AppID = parseInt(id);

  const SingleData = AppData.find((App) => App.id === AppID);

  const chartData = SingleData.ratings;

  const renderBarChart = (
    <BarChart
      width={800}
      height={300}
      data={chartData}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" reversed />
      <Tooltip />
      <Bar dataKey="count" fill="#FF8811" barSize={25} />
    </BarChart>
  );

  const {
    image,
    companyName,
    title,
    description,
    downloads,
    reviews,
    ratingAvg,
    size,
  } = SingleData;

  const handleInstall = (id) => {
    addToInstalledData(id);
  };
  return (
    <div className="mt-[80px] mb-[100px]">
      <div className="flex ">
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
            onClick={() => handleInstall(SingleData.id)}
            className="btn btn-wide mt-5 mb-5 text-white bg-[#00D390]"
          >
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl"> Ratings</h1>
        {renderBarChart}
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

// image , title, rating, downloads, reviews, description
