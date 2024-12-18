import logo from './logo.svg';
import './App1.css';
import { Routes, Route, Link } from 'react-router-dom';
import building1 from './building1.jpg';
import building2 from './building2.jpg';
import building3 from './building3.jpg';
import building4 from './building4.jpg';
import DetailsPage1 from './DetailsPage1';
import DetailsPage2 from './DetailsPage2';

function MainPage() {
  return (
    <>
    <video autoPlay muted loop className="video-background">
    <source src="/videos/background.mp4" type="video/mp4" />
    <img src="/images/fallback-image.jpg" alt="Fallback image" />
    </video>
      <div className="container">
        <div className="responsive">
          <div className="gallery">
          <Link to="/details1">
            <span className="badge">0% SOLD</span>
            <img src={building1} alt="Building 1" />
          </Link>
            <div className="desc">
              <h3>Godrej Lakeside Orchard</h3>
              <p>VPQ4+VF3, Chikkakannalli, Bengaluru</p>
              <p>2035 . 698 units</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <Link to="/details2">
            <span className="badge">0% SOLD</span>
            <img src={building2} alt="Building 2" />
            </Link>
            <div className="desc">
              <h3>Mana Dale</h3>
              <p>No.60 kodathi village, Sarjapur - Marathahalli Rd, Bengaluru</p>
              <p>2032 . 228 units</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <span className="badge">0% SOLD</span>
            <img src={building3} alt="Building 3" />
            <div className="desc">
              <h3>Mana The Right Life</h3>
              <p>Road, Sarjapura, Varthur, Bengaluru</p>
              <p>2035 . 683</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <span className="badge">0% SOLD</span>
            <img src={building4} alt="Building 4" />
            <div className="desc">
              <h3>East Park Residences - Rams</h3>
              <p>Survey 96/2, BNE MD 236, Kodathi, Carmelaram, Hadosiddapura, Chikkakannalli, Varthur, Bengaluru</p>
              <p>2028 . 497</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details1" element={<DetailsPage1 />} />
      <Route path="/details2" element={<DetailsPage2 />} />
    </Routes>
  );
}

export default App;
