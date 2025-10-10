import React from "react";

const InstalledApp = ({ info }) => {
  const { title, downloads, ratingAvg } = info;
  return (
    <div>
      <div className="card mb-4 w-full bg-base-100 p-4 card-sm shadow-sm">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
