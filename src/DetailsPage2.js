import React from 'react';
import './DetailsPage.css'; // CSS file for detailed page
import condoImage from './building2.jpg'; // Replace with your condo image

function DetailsPage() {
  return (
    <div className="details-page-container">
      
      {/* Top Section */}
      <div className="top-section">
        <div className="image-container">
          <img src={condoImage} alt="Condo" className="condo-image" />
          <div className="overlay-text">
            <h1>Arina East Residences</h1>
            <p>Launching Q1 2025</p>
            <p>TOP 2027 · 107 UNITS · D15</p>
            <button className="updates-button">Receive updates</button>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="info-section">
        <h2>Price range (indicative)</h2>
        <p className="coming-soon">Coming soon</p>
      </div>
      <div className="info-section">
        <h2>Sale psf range (indicative)</h2>
        <p className="coming-soon">Coming soon</p>
      </div>

      {/* See Unit Types Link */}
      <div className="info-section link-section">
        <a href="#unit-types" className="see-units-link">See unit types and prices</a>
      </div>

      {/* Unique Highlights */}
      <div className="highlights-section">
        <h2>Unique Highlights</h2>
        <p><span className="pointer">&rsaquo;</span> Arina East Residences offers premium living in the heart of the city, providing seamless connectivity to workplaces, educational hubs, and recreational facilities.</p>
        <p><span className="pointer">&rsaquo;</span> The property features cutting-edge amenities, including a state-of-the-art gym, swimming pool, lush gardens, and 24/7 security.</p>
      </div>

      {/* Project Details Section */}
      <div className="project-details-section">
        <h2>Project Details</h2>
        <p>Developer: XYZ Developers</p>
        <p>Location: D15 - East Coast</p>
        <p>Tenure: 99-Year Leasehold</p>
        <p>Expected TOP: 2027</p>
        <p>Total Units: 107</p>
      </div>

      {/* Facilities Section */}
      <div className="facilities-section">
        <h2>Facilities</h2>
        <ul>
          <li>Swimming Pool</li>
          <li>Gym & Fitness Area</li>
          <li>Rooftop Garden</li>
          <li>24/7 Security</li>
          <li>Children's Playground</li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsPage;
