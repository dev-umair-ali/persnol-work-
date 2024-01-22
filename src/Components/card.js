import React from "react";

export default function SampleCard({ imageUrl, title }) {
  return (
    <div>
      <img src={imageUrl} alt={title} height="500px" width="500px" />
      <h1>{title}</h1>
    </div>
  );
}
