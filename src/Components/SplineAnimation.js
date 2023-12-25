import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import "../Styles/SplineAnimation.css"

const My3DComponent = () => {
  useEffect(() => {
    // Get the canvas element
    const canvas = document.getElementById('canvas3d');

    // Create a new instance of the Application
    const app = new Application(canvas);

    // Load the 3D scene
    app.load('https://prod.spline.design/RcQgpCE8cR8FKFZU/scene.splinecode');

    // Cleanup function to handle unmounting
    return () => {
      // Check if the library provides a cleanup method, if not, perform any necessary cleanup
      if (app.cleanup) {
        app.cleanup();
      } else {
        // Perform manual cleanup, e.g., remove event listeners, dispose of resources, etc.
        // Example: canvas.removeEventListener('click', handleClick);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div>
      <canvas id="canvas3d" width={600} height={400}></canvas>
    </div>
  );
};

export default My3DComponent;
