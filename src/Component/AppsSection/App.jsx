import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const App = ({app}) => {
    
    const {title, image, id, downloads, ratingAvg } = app
    return (
        <Link to={`/appdetails/${id}`}>
        <div className='p-4'>
            <div className="card mx-auto bg-base-100 shadow-sm">
  <figure>
    <img className='md:h-[300px] p-6'
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
        </Link>
    );
};

export default App;

// app title / image / download count / average rating to show