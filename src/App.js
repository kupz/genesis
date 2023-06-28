import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import genesis from "./assets/kalbo.png";

import "./main.scss";
function App() {
  return (
    <div className="App">
      <div className="app-countdown">
        <CountdownTimer />
        <span>before Genesis birthday</span>
      </div>
      <div className="hero1">
        <div className="left">
          <p>PLEASE JOIN US</p>
          <p>AS WE CELEBRATE THE</p>
          <h2>Christening & Birthday</h2>
          <p>OF OUR SON</p>
          <div>
            <h1>GENESIS</h1>
            <h3>07 : 10 - 22</h3>
          </div>
        </div>
        <div className="genesis-container">
          <img src={genesis} className="genesis" />
        </div>
      </div>
    </div>
  );
}

export default App;
