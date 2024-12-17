import logo from './logo.svg';
import './App1.css';
import building1 from './building1.jpg'
import building2 from './building2.jpg'
import building3 from './building3.jpg'
import building4 from './building4.jpg'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div class="container">
      <div class="responsive">
      <div class="gallery">
        <img src={building1} alt="Building 1" />
        <div class="desc">
          Godrej Lakeside Orchard
          <p>VPQ4+VF3, Chikkakannalli, Bengaluru, Karnataka 560035</p>
          <p>2035 . 698</p>
          </div>
      </div>
    </div>
    
    <div class="responsive">
      <div class="gallery">
        <img src={building2} alt="Building 2"/>
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>
    
    <div class="responsive">
      <div class="gallery">
        <img src={building3} alt="Building 3" />
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>
    
    <div class="responsive">
      <div class="gallery">
        <img src={building4} alt="Building 4" />
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>
    
    <div class="clearfix"></div>
    </div>
  </>
  );
}

export default App;
