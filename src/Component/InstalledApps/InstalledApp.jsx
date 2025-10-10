import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const InstalledApp = ({ info, handleRemove }) => {
  const { title, size, downloads, ratingAvg, id,image } = info;
  return (
    <div>
      <div className="card mb-4 w-full bg-base-100 p-4 card-sm shadow-sm">
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <div>
                <img src={image} className="w-12" alt="" />
            </div>
            <div>
            <div className="space-y-3">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <div className="badge text-green-400 badge-soft badge-success">
                <MdOutlineFileDownload /> {downloads}M
              </div>
              <div className="badge border-none badge-outline badge-warning">
                <FaStar /> {ratingAvg} 
              </div>
              <p className="text-gray-400 font-semibold">{size} MB</p>
            </div>
          </div>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={()=> handleRemove(id)} className="btn btn-success text-white">Uninstall</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default InstalledApp;
