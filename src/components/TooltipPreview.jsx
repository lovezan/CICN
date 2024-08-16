// src/components/TooltipPreview.jsx
import React, { useState } from 'react';
import './TooltipPreview.css'; // Import the CSS file

const TooltipPreview = ({ children, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">
        {children}
      </a>
      {isHovered && (
        <div className="tooltip-preview">
          <iframe src={url} title="Website Preview" frameBorder="0"></iframe>
        </div>
      )}
    </div>
  );
};

export default TooltipPreview;
