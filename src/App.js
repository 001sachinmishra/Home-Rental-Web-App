import logo from './logo.svg';
import './App1.css';
import building1 from './building1.jpg';
import building2 from './building2.jpg';
import building3 from './building3.jpg';
import building4 from './building4.jpg';

function App() {
  return (
    <>
      <div className="container">
        <div className="responsive">
          <div className="gallery">
            <span className="badge">0% SOLD</span>
            <img src={building1} alt="Building 1" />
            <div className="desc">
              <h3>Godrej Lakeside Orchard</h3>
              <p>VPQ4+VF3, Chikkakannalli, Bengaluru</p>
              <p>2035 . 698 units</p>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <span className="badge">0% SOLD</span>
            <img src={building2} alt="Building 2" />
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

export default App;
