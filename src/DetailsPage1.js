import React, { useState } from 'react';
import './DetailsPage.css'; // CSS file for detailed page
import condoImage from './building1.jpg'; // Replace with your condo image

function DetailsPage() {

  const [showFullText, setShowFullText] = useState(false);

  const legalOpinionText = `
    Godrej Properties Limited is the absolute owner having good marketable right, 
    title and interest on residentially converted land bearing portion of Survey 
    No. 78/2A1 measuring 8 Guntas situated at Kodathi Village, Varthur Hobli, 
    Bangalore East Taluk, Bangalore.
  `;

  return (
    <div className="details-page-container">
      
      {/* Top Section */}
      <div className="top-section">
        <div className="image-container">
          <img src={condoImage} alt="Condo" className="condo-image" />
          <div className="overlay-text">
            <h1>Godrej Lakeside Orchard</h1>
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
        <p>TOP Date: 2027 </p>
        <p>Project Size: 1536 Sqft</p>
        <p>Tenure: Freehold</p>
        <p>District: Chikkakannalli</p>
        <p>Developer: </p>
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

      {/* Legal Opinion Section */}
      <div className="legal-opinion-section">
        <h2>Legal Opinion</h2>
        <p className="legal-text">
          {showFullText 
            ? legalOpinionText 
            : `${legalOpinionText.substring(0, 100)}...`}
        </p>
        <button 
          className="read-more-button" 
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      </div>

    </div>
  );
}

export default DetailsPage;
