import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const App = ({app}) => {
    console.log(app)
    const {title, image, downloads, ratingAvg } = app
    return (
        <div className='p-4'>
            <div className="card bg-base-100 w-88 shadow-sm">
  <figure>
    <img className='h-[300px] p-6'
      src={image}
      alt="app" />  
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      
    </h2>
    <div className="card-actions justify-between">
      <div className="badge text-green-400 badge-soft badge-success"><MdOutlineFileDownload /> {downloads}M</div>
      <div className="badge badge-outline badge-warning">{ratingAvg} <FaStar /></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default App;

// app title / image / download count / average rating to show