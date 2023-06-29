import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import genesis from "./assets/kalbo.png";

import "./main.scss";
function App() {
  return (
    <div className="App">
      <div className="app-countdown">
        <CountdownTimer />
        <div className="nav">
          <div> Ninong & Ninang</div>
          <div> Guest List</div>
        </div>
      </div>
      <div className="hero">
        <div className="genesis-container">
          <img src={genesis} alt="genesis" className="genesis" />
        </div>
        <div className="hero-right">
          <span>PLEASE JOIN US</span>
          <span>AS WE CELEBRATE</span>
          <h1>Christening & Birthday</h1>
          <span>OF OUR SON </span>
          <div>
            <span>GENESIS</span>
            <span>7 : 10 - 22</span>
          </div>
          <button>Confirm my Attendace</button>
        </div>
      </div>
      {/* When ? */}
      <div className="when">
        <div>
          <div>
            <h1>When & Where</h1>
            <span>July 8 , 2023</span>

            <span>420 Burger Ave.</span>

            <address>
              {
                " 1358 Claremont St. Brookside Hills , Cainta, Philippines, 1900"
              }
            </address>
          </div>
        </div>
      </div>
      {/* DRESSCODE */}
      <div className="dresscode">
        <h1>Dress Code</h1>
        <span>Casual Attire</span>
        <span>White / Neutral</span>
        <div className="dressColors">
          <div className="white"></div>
          <div className="brown"></div>
          <div className="others1"></div>
          <div className="others2"></div>
        </div>
      </div>
      {/* gift ideas */}
      <div className="gift-ideas">
        <h1>Gift Ideas</h1>
        <div>
          <span>
            YOUR PRAYERS AND PRESENCE ARE ALL THAT WE REQUEST. BUT IF YOU DESIRE
            TO GIVE NONETHELESS, THESE ARE THINGS THAT WE WOULD REALLY
            APPRECIATE.
          </span>
          <div>
            <div>Unilab Diaper size : medium</div>
            <div>Wet wipes & Dry wipes</div>
            <div>Cleansing Splash & Laundry Powder</div>
            <div>Educational Books & Learning Toys</div>
            <div>Monetary gifts for my savings account</div>
          </div>
          <span>
            Just because we gave ideas doesn't mean you are obligated to give.
            Love, Prayers and Your Presence is the most precious gift you can
            give.
          </span>
        </div>
      </div>
      <div className="footer">
        <h1>Save the date!</h1>
        <h2>See you on my special Day!</h2>
      </div>
    </div>
  );
}

export default App;
