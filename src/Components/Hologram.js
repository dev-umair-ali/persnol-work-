import React from 'react';
import "../Styles/Hologram.css"; // Import your CSS file if needed

const Hologram = () => {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="flex space-x-12">
        <div className="orbit">
          <div className="point"></div>
        </div>
      </div>
    </div>
  );
};

export default Hologram;
