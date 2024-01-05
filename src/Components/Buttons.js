import React, { useState } from 'react';
import '../Styles/Buttons.css'; // Replace with the correct path to your styles

const RotatingButton = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotation = () => {
    setRotation(rotation + 45); // Adjust the rotation angle as needed
  };

  return (
    <button
      className="rotating-btn"
      onClick={handleRotation}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      Rotate Button
    </button>
  );
};

export default RotatingButton;
