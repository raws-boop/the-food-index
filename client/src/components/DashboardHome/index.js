import React from 'react';
import './style.css';

function DashboardHome() {
  return (
    <div className="dash">
        <div className="image-container">
        <img height="auto" width="auto" src={process.env.PUBLIC_URL + '/images/the-food-index-logo.png'}/>
        </div>
        {/* <div className="dynamicSearch"></div> */}
    </div>

  );
}
 export default DashboardHome;
