import React from 'react';

const Tours = () => {
  return (
    <div className="col-md-9">
      <div id="info" className="bg-light p-5 rounded shadow-sm">
        <center>
          <h2 className="hd mb-4">Explore the World!</h2>
          <p className="lead">
            <strong>Tour plan shall be notified one month prior to conference dates.</strong>
          </p>
          <p className="mb-4">
            <i>We invite you to explore the beauty and diversity of our world.</i>
          </p>
          <div className="map-container">
            <p className="mb-4">
              <strong>Click below to explore various locations on Google Maps:</strong>
            </p>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Go and Explore the World
            </a>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Tours;
