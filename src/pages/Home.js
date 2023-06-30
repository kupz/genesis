import CountdownTimer from "../components/CountdownTimer";
import genesis from "../assets/kalbo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/modalSlice";
import Form from "../components/Form";
import { Link } from "react-router-dom";
export default function Home() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const toggle = () => {
    dispatch(toggleModal());
  };

  const getCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("code");
  };
  return (
    <>
      <div className="app-countdown ">
        <CountdownTimer />
        <div className="nav">
          <div>
            <Link to="/guests">Guest List</Link>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="genesis-container">
          <img src={genesis} alt="genesis" className="genesis" />
        </div>
        <div className="hero-right sign">
          <span className="neon-blue">PLEASE JOIN US</span>
          <span className="neon-blue">AS WE CELEBRATE</span>
          <h1 className="neon-purple" id="trav">
            Dedication & Birthday
          </h1>
          <span className="neon-purple">OF OUR SON </span>
          <div id="fade" className="neon-pink">
            <span>GENESIS</span>
            <span>7 : 10 - 22</span>
          </div>
          {getCode() !== null ? (
            <button onClick={toggle}>Confirm my Attendace</button>
          ) : null}
        </div>
      </div>
      {/* When ? */}
      <div className="when">
        <div>
          <div>
            <h1 className="flux">When & Where</h1>
            <span className="neon">July 8 , 2023</span>
            <span className="neon">10:00 AM</span>

            <span className="neon">420 Burger Ave.</span>

            <div
              className="neon text-align-center"
              style={{ textAlign: "center" }}
            >
              1358 Claremont St. Brookside Hills , Cainta, Philippines, 1900
            </div>
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
            <div>Cetaphil Shampoo / Body wash</div>
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
      <div className="footer neon">
        <h1>Save the date!</h1>
        <h3>See you on my special Day!</h3>
      </div>
      {modal ? <Form code={getCode()} /> : ""}
      {/* <CustomizedDialogs open={true} /> */}
    </>
  );
}
